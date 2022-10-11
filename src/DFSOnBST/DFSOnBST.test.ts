import dfs from "./DFSOnBST";
import { tree } from "../helpers/tree";

test("DFS on BST", function () {
  expect(dfs(tree, 45)).toEqual(true);
  expect(dfs(tree, 7)).toEqual(true);
  expect(dfs(tree, 69)).toEqual(false);
});
