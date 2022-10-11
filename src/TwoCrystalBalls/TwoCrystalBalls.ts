export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmt = Math.floor(Math.sqrt(breaks.length));

  let hi = 0;
  while (hi < breaks.length) {
    if (breaks[hi]) break;
    hi += jumpAmt;
  }

  for (let lo = hi - jumpAmt; lo < hi; ++lo) {
    if (breaks[lo]) return lo;
  }

  return -1;
}
