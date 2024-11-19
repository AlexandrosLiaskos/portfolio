use serde::Serialize;

#[derive(Serialize, Clone)]
pub struct PageData {
    pub professional_exp: String,
    pub education: String,
    pub publications: String,
    pub programming_langs: String,
    pub web_frameworks: String,
    pub languages: String,
    pub volunteer_work: String,
    pub international_exp: String,
    pub interests: Interests,
}

#[derive(Serialize, Clone)]
pub struct Interests {
    pub books: String,
    pub movies: String,
    pub tv_series: String,
    pub music: Vec<String>,
} 