mod handlers;
mod services;
mod config;

use actix_web::{App, HttpServer, web};
use actix_web::middleware::{Compress, Logger};
use actix_files::Files;
use std::sync::Arc;
use handlers::index::{index, AppState};
use config::templates::TEMPLATES;
use env_logger::Env;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init_from_env(Env::default().default_filter_or("info"));
    
    // Just create an empty context since we don't need dynamic data
    let ctx = tera::Context::new();
    let rendered_html = Arc::new(TEMPLATES.render("index.html", &ctx).unwrap());
    
    let state = web::Data::new(AppState {
        rendered_html,
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
