export default class SinglyLinkedList<T> implements List<T> {
  public length!: number;
  private head: ListNode<T> | undefined;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  get(idx: number): T | undefined {
    let curr = this.head;
    for (let i = 1; i <= idx; ++i) {
      curr = curr?.next;
    }
    return curr?.value;
  }

  prepend(item: T): void {
    this.length++;
    if (!this.head) {
      this.head = { value: item };
    } else {
      this.head.next = {
        value: this.head.value,
        next: this.head.next,
      };
      this.head.value = item;
    }
  }

  append(item: T): void {
    this.length++;
    if (!this.head) {
      this.head = { value: item };
    } else {
      let curr = this.head;
      while (curr?.next) {
        curr = curr.next;
      }
      curr.next = { value: item };
    }
  }

  insertAt(item: T, idx: number): void {
    this.length++;
    if (!this.head) {
      this.head = { value: item };
    } else {
      let curr = this.head;
      for (let i = 0; i < idx; ++i) {
        curr = curr?.next ? curr?.next : curr;
      }
      curr.next = curr;
      curr.value = item;
    }
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    let prev;
    while (curr?.value) {
      if (curr.value === item) {
        this.length--;
        if (prev) {
          prev.next = curr?.next;
        } else {
          this.head = curr?.next;
        }
        return curr?.value;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  removeAt(idx: number): T | undefined {
    let curr = this.head;
    let prev;
    for (let i = 0; i < idx; ++i) {
      prev = curr;
      curr = curr?.next;
    }

    this.length--;
    if (prev) {
      prev.next = curr?.next;
    }
    if (idx === 0) this.head = curr?.next;
    return curr?.value;
  }
}
