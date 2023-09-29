export const numberStartWithZero = (num: number, zeroEnd: number = 10) =>
  num < zeroEnd ? `0${num}` : `${num}`;
