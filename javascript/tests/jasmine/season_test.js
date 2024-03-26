import Season from "../../src/season.js";
import reporters from "jasmine-reporters";

var junitReporter = new reporters.JUnitXmlReporter({
  savePath: "tests/jasmine/reports",
  outputFile: "season_test.xml",
  consolidateAll: false,
});
jasmine.getEnv().addReporter(junitReporter);

describe("HuntingSeason", () => {
  it("Bugs - `Duck Season`", () => {
    const season = new Season();
    expect(season.getCurrent()).toEqual("Duck");
  });

  it("Daffy - `Rabbit Season`", () => {
    const season = new Season();
    expect(season.getCurrent()).toEqual("Rabbit");
  });
});
