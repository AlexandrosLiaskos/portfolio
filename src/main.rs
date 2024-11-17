use actix_files::Files;
use actix_web::{get, middleware, App, HttpServer, Result};
use futures::future::join_all;
use lazy_static::lazy_static;
use serde::Serialize;
use std::sync::Arc;
use tera::Tera;
use tokio::fs;

#[derive(Serialize, Clone)]
struct PageData {
    professional_exp: String,
    education: String,  // Added education field
    publications: String,
    programming_langs: String,
    web_frameworks: String,
    languages: String,
    volunteer_work: String,
    international_exp: String,
    interests: Interests,
}

#[derive(Serialize, Clone)]
struct Interests {
    books: String,
    movies: String,
    tv_series: String,
    music: Vec<String>,
}

lazy_static! {
    static ref TEMPLATES: Tera = {
        let mut tera = Tera::new("templates/**/*").unwrap();
        tera.autoescape_on(vec!["html"]);
        tera
    };
}

async fn read_markdown_file(path: String) -> String {
    match fs::read_to_string(&path).await {
        Ok(content) => markdown::to_html(&content),
        Err(_) => String::from("Content not available"),
    }
}

async fn load_page_data() -> PageData {
    let base_path = "static/content";
    
    // Create file paths
    let music_files = vec!["Koumioti", "Marinela", "Mpithikotsis"];
    let music_paths: Vec<String> = music_files
        .iter()
        .map(|file| format!("{}/Music/{}.md", base_path, file))
        .collect();
    
    // Read music files concurrently
    let music_futures: Vec<_> = music_paths
        .iter()
        .map(|path| read_markdown_file(path.to_string()))
        .collect();
    let music = join_all(music_futures).await;

    // Create paths for other files
    let prof_exp_path = format!("{}/Professional_Experiences.md", base_path);
    let edu_path = format!("{}/Academic_Education.md", base_path);  // Added education path
    let pub_path = format!("{}/Scientific_Publications.md", base_path);
    let prog_langs_path = format!("{}/Programming_Languages.md", base_path);
    let web_fw_path = format!("{}/Web_Frameworks.md", base_path);
    let langs_path = format!("{}/Languages.md", base_path);
    let vol_work_path = format!("{}/Volunteer_Work.md", base_path);
    let int_exp_path = format!("{}/International_Experiences.md", base_path);
    let books_path = format!("{}/Books.md", base_path);
    let movies_path = format!("{}/Movies_Kindness.md", base_path);
    let tv_path = format!("{}/TV_Series_Unknown.md", base_path);

    // Read other files concurrently
    let (
        professional_exp,
        education,  // Added education
        publications,
        programming_langs,
        web_frameworks,
        languages,
        volunteer_work,
        international_exp,
        books,
        movies,
        tv_series,
    ) = tokio::join!(
        read_markdown_file(prof_exp_path),
        read_markdown_file(edu_path),  // Added education
        read_markdown_file(pub_path),
        read_markdown_file(prog_langs_path),
        read_markdown_file(web_fw_path),
        read_markdown_file(langs_path),
        read_markdown_file(vol_work_path),
        read_markdown_file(int_exp_path),
        read_markdown_file(books_path),
        read_markdown_file(movies_path),
        read_markdown_file(tv_path),
    );

    PageData {
        professional_exp,
        education,  // Added education
        publications,
        programming_langs,
        web_frameworks,
        languages,
        volunteer_work,
        international_exp,
        interests: Interests {
            books,
            movies,
            tv_series,
            music,
        },
    }
}

struct AppState {
    rendered_html: Arc<String>,
}

#[get("/")]
async fn index(state: actix_web::web::Data<AppState>) -> Result<actix_web::HttpResponse> {
    Ok(actix_web::HttpResponse::Ok()
        .content_type("text/html")
        .insert_header(("Cache-Control", "public, max-age=31536000"))
        .body(state.rendered_html.to_string()))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Server running at http://localhost:8080");
    
    // Load data before starting server
    let page_data = load_page_data().await;
    
    // Pre-render HTML
    let mut ctx = tera::Context::new();
    ctx.insert("data", &page_data);
    let rendered_html = Arc::new(TEMPLATES.render("index.html", &ctx).unwrap());
    
    // Create shared state
    let state = actix_web::web::Data::new(AppState {
        rendered_html,
    });
    
    HttpServer::new(move || {
        App::new()
            .app_data(state.clone())
            .wrap(middleware::Compress::default())
            .wrap(middleware::Logger::default())
            .service(
                Files::new("/static", "static")
                    .prefer_utf8(true)
                    .use_last_modified(true)
                    .use_etag(true)
                    .disable_content_disposition()
            )
            .service(index)
    })
    .bind("127.0.0.1:8080")?
    .workers(num_cpus::get())  // Use all available CPU cores
    .backlog(2048)  // Double the backlog
    .max_connection_rate(1000) // Limit connection rate
    .run()
    .await
}
