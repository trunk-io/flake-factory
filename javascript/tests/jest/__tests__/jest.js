const moment = require("moment");

describe("Jest - Day of the Week Tests", () => {
  test("today is Mon || Tues || Wed", () => {
    const today = moment().format("dddd");
    expect(["Monday", "Tuesday", "Wednesday"]).toContain(today);
  });

  test("today is Thursday or Friday", () => {
    const today = moment().format("dddd");
    expect(["Thursday", "Friday"]).toContain(today);
  });

  test("today is Saturday or Sunday", () => {
    const today = moment().format("dddd");
    expect(["Saturday", "Sunday"]).toContain(today);
  });
  test("today is Saturday", () => {
    const today = moment().format("dddd");
    expect(["Saturday"]).toContain(today);
  });
});
