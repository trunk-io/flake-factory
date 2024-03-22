Feature: flaky test example written in behave

  Scenario: run a simple test that fails until retried a third time
     Given start the behave test
      When read file - if its not there - create it and fail
      Then file existed - verify it contains the string Hello World