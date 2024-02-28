// My Solution
// type Absolute<T extends number | string | bigint> = keyof {
//   [K in T as `${K}`]: unknown;
// } extends `${infer Head}${infer Tail}` 
//   ? Head extends '-'
//     ? Tail
//     : `${Head}${Tail}`
//   : never;

// Much simpler solution
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` 
  ? R 
  : `${T}`;
