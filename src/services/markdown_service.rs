use tokio::fs;
use futures::future::join_all;
use crate::models::page_data::{PageData, Interests};

pub async fn read_markdown_file(path: String) -> String {
    match fs::read_to_string(&path).await {
        Ok(content) => markdown::to_html(&content),
        Err(_) => String::from("Content not available"),
    }
}

pub async fn load_page_data() -> serde_json::Value {
    // For now, return an empty object
    serde_json::json!({})
} 
