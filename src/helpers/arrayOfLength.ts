export function arrayOfLength(length: number, mapfn: () => any = () => 1) {
  return Array.from({ length }, mapfn);
}
