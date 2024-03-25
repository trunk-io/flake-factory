use std::fs::File;
use std::io::prelude::*;
use std::io::BufReader;
use chrono::prelude::*;

#[cfg(test)]
mod tests {
    use chrono::{Utc, Datelike, Timelike};

    // begin-new-test-1
    #[test]
    fn it_is_the_morning_of_march_25() {
        let now = Utc::now();        
        assert_eq!(now.month(), 3); // check if the current month is 3
        assert_eq!(now.day(), 25); // check if the current day is 25
        assert!(now.time().hour() < 12); // Check if the time is before noon
    }
    // end-new-test-1
}
