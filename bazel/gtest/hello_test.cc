#include <gtest/gtest.h>
#include <ctime>

// Function to check if the current minute is even
bool isCurrentMinuteEven() {
    // Get the current time
    std::time_t now = std::time(nullptr);
    std::tm* localTime = std::localtime(&now);

    // Get the current minute
    int minute = localTime->tm_min;

    // Return true if the minute is even, false otherwise
    return minute % 2 == 0;
}
// Demonstrate some basic assertions.
TEST(HelloTest, BasicAssertions) {
  // Expect two strings not to be equal.
  EXPECT_STRNE("hello", "world");
  // Expect equality.
  EXPECT_TRUE(isCurrentMinuteEven());
  EXPECT_EQ(7 * 6, 42);
}

// Demonstrate some basic assertions.
TEST(HelloTest, BasicTylerFailures) {
  // Expect two strings not to be equal.
  EXPECT_STRNE("hello", "world");
  // Expect equality.
  EXPECT_TRUE(isCurrentMinuteEven());
  EXPECT_EQ(7 * 6, 42);
}
