import two_crystal_balls from "./TwoCrystalBalls";
import binary_fn from "../BinarySearchList/BinarySearchList";

test("two crystal balls", function () {
  let idx = Math.floor(Math.random() * 10000);
  const data = new Array(10000).fill(false);

  for (let i = idx; i < 10000; ++i) {
    data[i] = true;
  }

  expect(two_crystal_balls(data)).toEqual(idx);
  expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
});

test.each([10, 100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000])(
  `two crystal balls performance %px`,
  (length) => {
    const foo = Array.from({ length }, () => true);

    two_crystal_balls(foo);
  }
);
