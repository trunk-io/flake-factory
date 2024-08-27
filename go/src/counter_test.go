package greetings

import (
	"os"
	"strconv"
	"testing"
	"time"
)

const counterFile = "counter_test.txt"

// readCounter reads the counter value from the file.
func readCounter() (int, error) {
	data, err := os.ReadFile(counterFile)
	if err != nil {
		return 0, err
	}
	counter, err := strconv.Atoi(string(data))
	if err != nil {
		return 0, err
	}
	return counter, nil
}

// writeCounter writes the counter value to the file.
func writeCounter(counter int) error {
	return os.WriteFile(counterFile, []byte(strconv.Itoa(counter)), 0644)
}

func TestPassEveryThirdExecution(t *testing.T) {
	// Read the current counter value
	counter, err := readCounter()
	if err != nil {
		// If the file does not exist, initialize the counter to 0
		if os.IsNotExist(err) {
			counter = 0
		} else {
			t.Fatalf("Failed to read counter: %v", err)
		}
	}

	// Increment the counter
	counter++

	// Write the updated counter value back to the file
	if err := writeCounter(counter); err != nil {
		t.Fatalf("Failed to write counter: %v", err)
	}

	// Sleep for 10 milliseconds
	time.Sleep(100 * time.Millisecond)

	// Pass the test every 3rd execution
	if counter%3 != 0 {
		t.Fatalf("Pass every 3rd execution")
	} else {
		// On pass we delete the file
		os.Remove(counterFile)
	}
}
