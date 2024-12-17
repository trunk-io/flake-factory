package golang_examples

import (
	"testing"
	"time"
)

// passes if the current second is even
func CurrentSecondIsEven(t *testing.T) {

	currentTime := time.Now()
	sec := currentTime.Second()

	if sec%2 != 0 {
		t.Errorf("Second '%d' is not even", sec)
		// Sleep so retry cases can pass (sometimes)
		time.Sleep(600 * time.Millisecond)
	}
}

// passes if the current second is odd
func CurrentSecondIsOdd(t *testing.T) {

	currentTime := time.Now()
	sec := currentTime.Second()

	if sec%2 == 0 {
		t.Errorf("Second '%d' is not odd", sec)
		// Sleep so retry cases can pass (sometimes)
		time.Sleep(600 * time.Millisecond)
	}
}

// passes if the current second is odd
func TimeIsNotReal(t *testing.T) {

	currentTime := time.Now()
	sec := currentTime.Second()

	if sec%2 == 0 {
		t.Errorf("Second '%d' is not odd", sec)
		// Sleep so retry cases can pass (sometimes)
		time.Sleep(600 * time.Millisecond)
	}
}

// passes if the current second is even
func TimeIsNotComplex(t *testing.T) {

	currentTime := time.Now()
	sec := currentTime.Second()

	if sec%2 != 0 {
		t.Errorf("Second '%d' is not even", sec)
		// Sleep so retry cases can pass (sometimes)
		time.Sleep(600 * time.Millisecond)
	}
}
