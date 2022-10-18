export default class Queue<T> {
  public length: number;
  private head?: ListNode<T>;
  private tail?: ListNode<T>;

  constructor() {
    this.length = 0;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  enqueue(item: T): void {
    this.length++;

    if (!this.head) {
      this.head = { value: item };
      this.tail = this.head;
    } else {
      const tail = this.tail!;
      tail.next = { value: item };
      this.tail = tail.next;
    }
  }

  dequeue(): T | undefined {
    if (!!this.head) {
      this.length--;
      const head = this.head;
      this.head = this.head?.next;
      return head?.value;
    }
  }
}
