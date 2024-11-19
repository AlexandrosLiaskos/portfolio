mod models;
mod handlers;
mod services;
mod config;

use actix_web::{App, HttpServer, web};
use actix_web::middleware::{Compress, Logger};
use actix_files::{Files, NamedFile};
use actix_web::http::header::{HeaderName, HeaderValue};
use actix_web::dev::{ServiceRequest, ServiceResponse};
use actix_web::Error;
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
            .wrap(Compress::default())
            .wrap(Logger::default())
            .service(index)
            .service(
                Files::new("/static", "./static")
                    .prefer_utf8(true)
                    .use_last_modified(true)
                    .use_etag(false)
                    .default_handler(|req: ServiceRequest| async move {
                        let (http_req, _) = req.into_parts();
                        let file = NamedFile::open_async(http_req.match_info().query("path"))
                            .await
                            .map_err(Error::from)?;
                        
                        let mut response = file.into_response(&http_req);
                        response.headers_mut().insert(
                            HeaderName::from_static("cache-control"),
                            HeaderValue::from_static("no-cache, no-store, must-revalidate, private")
                        );
                        response.headers_mut().insert(
                            HeaderName::from_static("pragma"),
                            HeaderValue::from_static("no-cache")
                        );
                        response.headers_mut().insert(
                            HeaderName::from_static("expires"),
                            HeaderValue::from_static("0")
                        );
                        
                        Ok(ServiceResponse::new(http_req, response))
                    })
            )
    })
    .bind("127.0.0.1:8080")?
    .workers(num_cpus::get())
    .backlog(2048)
    .max_connection_rate(1000)
    .run()
    .await
}