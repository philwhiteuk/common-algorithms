export default class Stack<T> {
  public length!: number;

  constructor() {}

  push(item: T): void {}
  pop(): T | undefined {
    throw new Error("not implemented");
  }
  peek(): T | undefined {
    throw new Error("not implemented");
  }
}
