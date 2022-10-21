export default class Stack<T> {
  public length: number;
  private head?: ListNode<T>;

  constructor() {
    this.length = 0;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  push(item: T): void {
    this.length++;
    const node = { value: item };

    if (!this.head) {
      this.head = node;
      return;
    }

    const next = this.head;
    this.head = node;
    this.head.next = next;
  }

  pop(): T | undefined {
    const value = this.head?.value;
    if (value) {
      this.length--;
      this.head = this.head?.next;
    }
    return value;
  }
}
