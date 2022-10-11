export default class LRU<K, V> {
  constructor(private length: number) {}

  update(key: K, value: V): void {}
  get(key: K): V | undefined {
    throw new Error("not implemented");
  }
}
