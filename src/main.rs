mod handlers;
mod services;
mod config;

use actix_web::{App, HttpServer, web};
use actix_web::middleware::{Compress, Logger};
use actix_files::Files;
use std::sync::Arc;
use std::fs;
use std::path::Path;
use handlers::index::{index, AppState};
use config::templates::TEMPLATES;
use env_logger::Env;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Check if we're in static generation mode
    let args: Vec<String> = std::env::args().collect();
    let is_static = args.get(1).map_or(false, |arg| arg == "--static");

    let ctx = tera::Context::new();
    let rendered_html = TEMPLATES.render("index.html", &ctx).unwrap();

    if is_static {
        // Static file generation mode
        println!("Generating static files...");
        
        // Create dist directory if it doesn't exist
        let dist_path = Path::new("dist");
        if !dist_path.exists() {
            fs::create_dir_all(dist_path)?;
        }
        
        // Write index.html
        fs::write(dist_path.join("index.html"), rendered_html)?;
        
        println!("Static files generated successfully!");
        return Ok(());
    }

    // Server mode
    env_logger::init_from_env(Env::default().default_filter_or("info"));
    
    let state = web::Data::new(AppState {
        rendered_html: Arc::new(rendered_html),
    });

    HttpServer::new(move || {
        App::new()
            .app_data(state.clone())
            .wrap(Compress::default())
            .wrap(Logger::default())
            .service(index)
            .service(Files::new("/static", "./static"))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
