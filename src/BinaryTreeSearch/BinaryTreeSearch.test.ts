import {tree} from "../helpers/tree";
import {binary_tree_search_pre_order, binary_tree_search_in_order, binary_tree_search_post_order} from "./BinaryTreeSearch";

test("Pre order", function () {
    expect(binary_tree_search_pre_order(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
});

test("In order", function () {
    expect(binary_tree_search_in_order(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});

test("Post order", function () {
    expect(binary_tree_search_post_order(tree)).toEqual([7, 5, 15, 10, 29, 45, 30, 100, 50, 20]);
});
