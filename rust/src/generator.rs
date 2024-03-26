use chrono::Datelike;
use chrono::Utc;
use regex::Regex;
use std::fs;

fn main() {
    let path = "rust/tests/new_test.rs";
    let content = fs::read_to_string(path).expect("Could not read file");

    let now = Utc::now();
    let month = now.month();
    let day = now.day();

    let re = Regex::new(r"assert_eq!\(now.month\(\), \d+\);").unwrap();
    let new_content = re.replace(
        &content,
        format!("assert_eq!(now.month(), {});", month).as_str(),
    );

    let re = Regex::new(r"assert_eq!\(now.day\(\), \d+\);").unwrap();
    let new_content = re.replace(
        &new_content,
        format!("assert_eq!(now.day(), {});", day).as_str(),
    );

    let re = Regex::new(r"it_is_the_morning_of_\w+_\d+").unwrap();
    let new_content = re.replace(
        &new_content,
        format!(
            "it_is_the_morning_of_{}_{}",
            now.format("%b").to_string().to_lowercase(),
            day
        )
        .as_str(),
    );

    let re = Regex::new(r"it_is_the_afternoon_of_\w+_\d+").unwrap();
    let new_content = re.replace(
        &new_content,
        format!(
            "it_is_the_afternoon_of_{}_{}",
            now.format("%b").to_string().to_lowercase(),
            day
        )
        .as_str(),
    );

    fs::write(path, new_content.into_owned()).expect("Could not write file");
}
