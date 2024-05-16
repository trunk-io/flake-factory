#[cfg(test)]
mod tests {
    use chrono::{Datelike, Local, Timelike};

    #[test]
    fn it_is_the_morning_of_may_16() {
        let now = Local::now().with_timezone(&chrono_tz::America::Los_Angeles);
        assert_eq!(now.month(), 5); // check if the current month is 3
        assert_eq!(now.day(), 16); // check if the current day is 25
        assert!(now.time().hour() < 12); // Check if the time is before noon
    }

    #[test]
    fn it_is_the_afternoon_of_may_16() {
        let now = Local::now().with_timezone(&chrono_tz::America::Los_Angeles);
        assert_eq!(now.month(), 3); // check if the current month is 3
        assert_eq!(now.day(), 25); // check if the current day is 25
        assert!(now.time().hour() >= 12); // Check if the time is before noon
    }
}
