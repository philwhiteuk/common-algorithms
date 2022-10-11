import LinkedList from "./DoublyLinkedList";
import { test_list } from "./helpers/ListTest";

test("DoublyLinkedList", function () {
  const list = new LinkedList<number>();
  test_list(list);
});
