import {tree} from "../helpers/tree";
import {bt_pre_order, bt_in_order, bt_post_order} from "./BinaryTree";

test("Pre order", function () {
    expect(bt_pre_order(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
});

test("In order", function () {
    expect(bt_in_order(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});

test("Post order", function () {
    expect(bt_post_order(tree)).toEqual([7, 5, 15, 10, 29, 45, 30, 100, 50, 20]);
});
