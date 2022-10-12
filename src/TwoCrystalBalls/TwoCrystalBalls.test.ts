import two_crystal_balls from "./TwoCrystalBalls";
import { arrayOfLength } from "../helpers/arrayOfLength";

test("two crystal balls", function () {
  let idx = Math.floor(Math.random() * 10000);
  const data = new Array(10000).fill(false);

  for (let i = idx; i < 10000; ++i) {
    data[i] = true;
  }

  expect(two_crystal_balls(data)).toEqual(idx);
  expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
});

[10, 100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000, 100_000_000].forEach(
  (length) => {
    const foo = arrayOfLength(length, true);
    test(`two crystal balls peformance test ${length}`, () => {
      two_crystal_balls(foo);
    });
  }
);
