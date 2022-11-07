export default class ArrayList<T> implements List<T> {
  length: number;
  private items: Array<T>;

  constructor(private capacity: number) {
    this.length = 0;
    this.items = new Array(capacity);
  }

  append(item: T): void {
    if (this.length >= this.capacity) {
      this.capacity *= 2;

      const oldItems = this.items;
      this.items = new Array(this.capacity);

      for (let iter = 0; iter < oldItems.length; ++iter) {
        this.items[iter] = oldItems[iter];
      }
    }

    this.items[this.length] = item;
    this.length++;
  }

  prepend(item: T): void {
    const oldItems = this.items;
    this.items = new Array(
      this.length >= this.capacity ? (this.capacity *= 2) : this.capacity
    );

    this.items[0] = item;
    for (let iter = 1; iter < oldItems.length; ++iter) {
      this.items[iter] = oldItems[iter - 1];
    }

    this.length++;
  }

  insertAt(item: T, idx: number): void {
    const oldItems = this.items;
    this.items = new Array(
      this.length >= this.capacity ? (this.capacity *= 2) : this.capacity
    );

    this.items[idx] = item;
    for (let iter = idx + 1; iter < oldItems.length; ++iter) {
      this.items[iter] = oldItems[iter - 1];
    }

    this.length++;
  }

  get(idx: number): T | undefined {
    if (idx > this.length) {
      return undefined;
    } else {
      return this.items[idx];
    }
  }

  remove(item: T): T | undefined {
    const oldItems = this.items;
    this.items = new Array(this.capacity);

    let found;
    for (let iter = 0; iter < oldItems.length; ++iter) {
      if (oldItems[iter] === item) {
        this.length--;
        found = oldItems[iter];
      } else {
        this.items[!found ? iter : iter - 1] = oldItems[iter];
      }
    }

    return found;
  }

  removeAt(idx: number): T | undefined {
    const oldItems = this.items;
    this.items = new Array(this.capacity);

    let found;
    for (let iter = 0; iter < oldItems.length; ++iter) {
      if (iter == idx) {
        this.length--;
        found = oldItems[iter];
      } else {
        this.items[iter < idx ? iter : iter - 1] = oldItems[iter];
      }
    }

    return found;
  }
}
