package golang_examples

import (
	"encoding/json"
	"os"
	"testing"
	"time"
)

// CounterData holds the runner and count information.
type CounterData struct {
	Runner string `json:"runner"`
	Count  int    `json:"count"`
}

const counterFile = "counter_test.txt"

// readCounter reads the counter data from the file.
func readCounter() (CounterData, error) {
	var data CounterData
	fileData, err := os.ReadFile(counterFile)
	if err != nil {
		return data, err
	}
	err = json.Unmarshal(fileData, &data)
	if err != nil {
		return data, err
	}
	return data, nil
}

// writeCounter writes the counter data to the file.
func writeCounter(data CounterData) error {
	fileData, err := json.Marshal(data)
	if err != nil {
		return err
	}
	return os.WriteFile(counterFile, fileData, 0644)
}

func TestPassEveryThirdExecution(t *testing.T) {

	// Read the GORUNNER environment variable
	goRunner := os.Getenv("GORUNNER")
	if goRunner == "" {
		goRunner = "NONE"
	}

	// Read the current counter value
	counterData, err := readCounter()
	if err != nil {
		// If the file does not exist, initialize the counter to 0
		if os.IsNotExist(err) || counterData.Runner != goRunner {
			// new runner being used created new tracker file
			counterData = CounterData{Runner: goRunner, Count: 0}
		} else {
			t.Fatalf("Failed to read counter: %v", err)
		}
	}

	// Increment the counter
	counterData.Count++

	// Write the updated counter value back to the file
	if err := writeCounter(counterData); err != nil {
		t.Fatalf("Failed to write counter: %v", err)
	}

	// Sleep for 200 milliseconds
	time.Sleep(200 * time.Millisecond)

	// Pass the test every 3rd execution
	if counterData.Count%3 != 0 {
		t.Fatalf("current count is %d for runner %s; test should pass on 3rd run", counterData.Count, counterData.Runner)
	} else {
		// On pass we delete the file
		os.Remove(counterFile)
	}
}
