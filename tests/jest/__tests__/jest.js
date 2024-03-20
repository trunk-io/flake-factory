const moment = require("moment");

test("today is Monday", () => {
  const today = moment().format("dddd");
  expect(today).toBe("Monday");
});

test("today is Tuesday", () => {
  const today = moment().format("dddd");
  expect(today).toBe("Tuesday");
});

test("today is Wednesday", () => {
  const today = moment().format("dddd");
  expect(today).toBe("Wednesday");
});

test("today is Thursday", () => {
  const today = moment().format("dddd");
  expect(today).toBe("Thursday");
});

test("today is Friday", () => {
  const today = moment().format("dddd");
  expect(today).toBe("Friday");
});

test("today is Saturday", () => {
  const today = moment().format("dddd");
  expect(today).toBe("Saturday");
});

test("today is Sunday", () => {
  const today = moment().format("dddd");
  expect(today).toBe("Sunday");
});
