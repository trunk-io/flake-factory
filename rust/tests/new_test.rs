use chrono::prelude::*;
use std::fs::File;
use std::io::prelude::*;
use std::io::BufReader;

#[cfg(test)]
mod tests {
    use chrono::{Datelike, Timelike, Utc};

    #[test]
    fn it_is_the_morning_of_mar_26() {
        let now = Utc::now();
        assert_eq!(now.month(), 3); // check if the current month is 3
        assert_eq!(now.day(), 26); // check if the current day is 25
        assert!(now.time().hour() < 12); // Check if the time is before noon
    }

    #[test]
    fn it_is_the_afternoon_of_mar_26() {
        let now = Utc::now();
        assert_eq!(now.month(), 3); // check if the current month is 3
        assert_eq!(now.day(), 25); // check if the current day is 25
        assert!(now.time().hour() >= 12); // Check if the time is before noon
    }
}
