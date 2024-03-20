import Season from "../../src/season.js";

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
