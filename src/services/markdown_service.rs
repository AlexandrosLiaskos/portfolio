use tokio::fs;
use futures::future::join_all;
use crate::models::page_data::{PageData, Interests};

pub async fn read_markdown_file(path: String) -> String {
    match fs::read_to_string(&path).await {
        Ok(content) => markdown::to_html(&content),
        Err(_) => String::from("Content not available"),
    }
}

pub async fn load_page_data() -> PageData {
    let base_path = "static/content";
    
    let music_files = vec!["Koumioti", "Marinela", "Mpithikotsis"];
    let music_paths: Vec<String> = music_files
        .iter()
        .map(|file| format!("{}/Music/{}.md", base_path, file))
        .collect();
    
    let music = join_all(music_paths.iter()
        .map(|path| read_markdown_file(path.to_string())))
        .await;

    let (
        professional_exp,
        education,
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
        read_markdown_file(format!("{}/Professional_Experiences.md", base_path)),
        read_markdown_file(format!("{}/Academic_Education.md", base_path)),
        read_markdown_file(format!("{}/Scientific_Publications.md", base_path)),
        read_markdown_file(format!("{}/Programming_Languages.md", base_path)),
        read_markdown_file(format!("{}/Web_Frameworks.md", base_path)),
        read_markdown_file(format!("{}/Languages.md", base_path)),
        read_markdown_file(format!("{}/Volunteer_Work.md", base_path)),
        read_markdown_file(format!("{}/International_Experiences.md", base_path)),
        read_markdown_file(format!("{}/Books.md", base_path)),
        read_markdown_file(format!("{}/Movies_Kindness.md", base_path)),
        read_markdown_file(format!("{}/TV_Series_Unknown.md", base_path)),
    );

    PageData {
        professional_exp,
        education,
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