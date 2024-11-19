mod models;
mod handlers;
mod services;
mod config;

use actix_files::Files;
use actix_web::{middleware, web, App, HttpServer};
use std::sync::Arc;
use handlers::index::{index, AppState};
use services::markdown_service::load_page_data;
use config::templates::TEMPLATES;
use env_logger::Env;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init_from_env(Env::default().default_filter_or("info"));
    
    log::info!("Starting server at http://localhost:8080");
    
    let page_data = load_page_data().await;
    log::info!("Page data loaded");
    
    let mut ctx = tera::Context::new();
    ctx.insert("data", &page_data);
    let rendered_html = Arc::new(TEMPLATES.render("index.html", &ctx).unwrap());
    log::info!("Templates rendered");
    
    let state = web::Data::new(AppState {
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
    .workers(num_cpus::get())
    .backlog(2048)
    .max_connection_rate(1000)
    .run()
    .await
}