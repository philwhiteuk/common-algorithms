export default class SinglyLinkedList<T> {
  public length!: number;

  constructor() {}

  prepend(item: T): void {}
  insertAt(item: T, idx: number): void {}
  append(item: T): void {}
  remove(item: T): T | undefined {
    throw new Error("not implemented");
  }
  get(idx: number): T | undefined {
    throw new Error("not implemented");
  }
  removeAt(idx: number): T | undefined {
    throw new Error("not implemented");
  }
}
