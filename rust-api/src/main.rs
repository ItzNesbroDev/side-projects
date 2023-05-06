use actix_web::{get, App, HttpServer, Responder};
use rand::Rng;
use reqwest::blocking::get;

#[get("joke")]
async fn get_joke() -> impl Responder {
    let url = "https://official-joke-api.appspot.com/random_joke";
    let response = get(url).unwrap().json::<serde_json::Value>().unwrap();

    let setup = response["setup"].as_str().unwrap();
    let punchline = response["punchline"].as_str().unwrap();

    let joke = format!("{}\n{}", setup, punchline);

    joke
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(get_joke))
    .bind("127.0.0.1:8080")?
    .run()
    .await
}