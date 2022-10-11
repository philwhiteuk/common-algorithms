import ArrayList from "./ArrayList";
import { test_list } from "./helpers/ListTest";

test("array-list", function () {
  const list = new ArrayList<number>(3);
  test_list(list);
});
