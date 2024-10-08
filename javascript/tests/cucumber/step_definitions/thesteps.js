import {Given, Then, When} from "@cucumber/cucumber";
import assert from "node:assert"
let today
let actualAnswer

Given(/^today is Sunday$/, function () {
    today = "Sunday"
});
When(/^I ask whether it's Friday yet$/, function () {
    actualAnswer = today
});
Then(/^I should be told "([^"]*)"$/, function (ans) {
    assert(ans === 'Nopes')
});
