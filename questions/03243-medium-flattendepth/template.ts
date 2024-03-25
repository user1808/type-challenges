type FlattenDepth<T extends unknown[], U extends number = 1> = T extends [infer Head, ...infer Tail]
  ? Head extends any[] 
    ? U extends 1
      ? [...Head, ...FlattenDepth<Tail, U>]
      : [...FlattenDepth<Head, MinusOne<U>>, ...FlattenDepth<Tail, U>]
    : [Head, ...FlattenDepth<Tail, U>]
  : [];

// Solution without MinusOne:
// type FlattenDepth<T extends unknown[], U extends number = 1, Acc extends unknown[] = [unknown]> = T extends [infer Head, ...infer Tail]
//   ? Head extends any[] 
//     ? U extends Acc['length']
//       ? [...Head, ...FlattenDepth<Tail, U>]
//       : [...FlattenDepth<Head, U, [unknown, ...Acc]>, ...FlattenDepth<Tail, U>]
//     : [Head, ...FlattenDepth<Tail, U, Acc>]
//   : [];