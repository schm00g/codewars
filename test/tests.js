import { assert } from "chai";
import { descendingOrder, alphabetPosition, isSquare } from '../src/solutions.js'

describe("Basic tests", () => {
  it("should output descending order integer", () => {
    assert.strictEqual(descendingOrder(0), 0)
    assert.strictEqual(descendingOrder(1), 1)
    assert.strictEqual(descendingOrder(111), 111)
    assert.strictEqual(descendingOrder(15), 51)
    assert.strictEqual(descendingOrder(1021), 2110)
    assert.strictEqual(descendingOrder(123456789), 987654321)
  })
})

describe("Tests", () => {
  it("should output correct alphabetical positions", () => {
    assert.strictEqual(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
    assert.strictEqual(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
  });
});

describe("isSquare", function(){
  it("should check if numbers are perfect squares", function(){
    Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
    Test.assertEquals(isSquare(0), true, "0 is a square number (0 * 0)");
    Test.assertEquals(isSquare(3), false, "3 is not a square number");
    Test.assertEquals(isSquare(4), true, "4 is a square number (2 * 2)");
    Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
    Test.assertEquals(isSquare(26), false, "26 is not a square number");
  });
});
