import linear_fn from "./LinearSearchList";
import { arrayOfLength } from "../helpers/arrayOfLength";

test("linear search array", function () {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  expect(linear_fn(foo, 69)).toEqual(true);
  expect(linear_fn(foo, 1336)).toEqual(false);
  expect(linear_fn(foo, 69420)).toEqual(true);
  expect(linear_fn(foo, 69421)).toEqual(false);
  expect(linear_fn(foo, 1)).toEqual(true);
  expect(linear_fn(foo, 0)).toEqual(false);
});

[10, 100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000, 100_000_000].forEach(
  (length) => {
    const foo = arrayOfLength(length, () => 1);
    test(`linear search array peformance test ${length}`, () => {
      linear_fn(foo, 0);
    });
  }
);
