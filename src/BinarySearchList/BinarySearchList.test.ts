import binary_fn from "./BinarySearchList";

test("binary search array", function () {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  expect(binary_fn(foo, 69)).toEqual(true);
  expect(binary_fn(foo, 1336)).toEqual(false);
  expect(binary_fn(foo, 69420)).toEqual(true);
  expect(binary_fn(foo, 69421)).toEqual(false);
  expect(binary_fn(foo, 1)).toEqual(true);
  expect(binary_fn(foo, 0)).toEqual(false);
});

test.each([10, 100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000])(
  `binary search array performance %px`,
  (length) => {
    const foo = Array.from({ length }, () => 1);

    binary_fn(foo, 0);
  }
);
