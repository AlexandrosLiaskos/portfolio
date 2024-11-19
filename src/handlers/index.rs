use actix_web::{get, web, HttpResponse, Result};
use std::sync::Arc;

pub struct AppState {
    pub rendered_html: Arc<String>,
}

#[get("/")]
pub async fn index(data: web::Data<AppState>) -> Result<HttpResponse> {
    Ok(HttpResponse::Ok()
        .content_type("text/html")
        .insert_header(("Cache-Control", "public, max-age=31536000"))
        .body(data.rendered_html.to_string()))
} 