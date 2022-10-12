export function arrayOfLength(length: number, value: any = 1) {
  return Array.from({ length }, () => value);
}
