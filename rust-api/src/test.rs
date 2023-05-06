use rand::Rng;
use reqwest::blocking::get;

fn main() {
    let url: &str = "https://official-joke-api.appspot.com/random_joke";
    let response = get(url).unwrap().json::<serde_json::Value>().unwrap();

    let setup = response["setup"].as_str().unwrap();
    let punchline = response["punchline"].as_str().unwrap();

    let joke = format!("{}\n{}", setup, punchline);

     println!("{}", joke);
}