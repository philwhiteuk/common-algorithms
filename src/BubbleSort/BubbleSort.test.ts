import bubble_sort from "./BubbleSort";
import { arrayOfLength } from "../helpers/arrayOfLength";
import binary_fn from "../BinarySearchList/BinarySearchList";

test("bubble-sort", function () {
  const arr = [9, 3, 7, 4, 69, 420, 42];

  debugger;
  bubble_sort(arr);
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

[10, 100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000, 100_000_000].forEach(
  (length) => {
    let i = 1;
    const foo = arrayOfLength(length, () => {
      if (i === 1) {
        i = 0;
        return 1;
      }
      return 0;
    });
    test(`bubble-sort array performance test ${length}`, () => {
      binary_fn(foo, 0);
    });
  }
);
