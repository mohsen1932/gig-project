import * as helpers from "./helpers";

describe("Helpers", () => {
  test("randomizeColors", () => {
    const result = helpers.randomizeColors([]);
    expect(Array.isArray(result)).toBe(true);
  });
});
