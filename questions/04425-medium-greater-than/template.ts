type CompareStringsLength<T extends string, U extends string> = T extends `${infer _}${infer Tail1}` 
  ? U extends `${infer _}${infer Tail2}`
    ? CompareStringsLength<Tail1, Tail2>
    : true
  : U extends `${infer _}${infer _}`
    ? false
    : unknown;

type CompareDigit<T extends string, U extends string, Acc extends unknown[] = []> = T extends `${Acc['length']}` 
? U extends `${Acc['length']}`
  ? unknown
  : false
: U extends `${Acc['length']}`
  ? true
  : CompareDigit<T, U, [unknown, ...Acc]>;

type CompareEachNumberDigit<T extends string, U extends string> = T extends `${infer Head1}${infer Tail1}`
  ? U extends `${infer Head2}${infer Tail2}`
    ? CompareDigit<Head1, Head2> extends boolean
      ? CompareDigit<Head1, Head2>
      : CompareEachNumberDigit<Tail1, Tail2>
    : false
  : false

// Much more comlicaged solution, but it works with big numbers :DDDD
type GreaterThan<T extends number, U extends number> = CompareStringsLength<`${T}`, `${U}`> extends boolean
  ? CompareStringsLength<`${T}`, `${U}`>
  : CompareEachNumberDigit<`${T}`, `${U}`>


// Simpler solution, but it cause big number problems:
// Acc['length'] extends T
//   ? false
//   : Acc['length'] extends U
//     ? true
//     : GreaterThan<T, U, [unknown, ...Acc]>
