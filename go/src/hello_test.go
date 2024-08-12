package greetings

import (
    "testing"
    "time"
)



// passes if the current minute is divisible by 2
func TestCurrentMinute(t *testing.T) {

    currentTime := time.Now()
    minute := currentTime.Minute()


    if minute % 2 != 0 {
        t.Errorf("Minute is not divisible by two.")
    }
}


