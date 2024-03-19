type IsDivisibleBy5<N extends number> = `${N}` extends `${string}${'0' | '5'}`
  ? true
  : false;

type IsDivisibleBy3<N extends number, Acc extends unknown[] = []> = 
  `${N}` extends `${infer Head extends number}${infer Tail extends number}`
    ? IsDivisibleBy3<Tail, [...CreateArrayOfLength<Head>, ...Acc]> 
    : [...CreateArrayOfLength<N>, ...Acc]['length'] extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
      ? [...CreateArrayOfLength<N>, ...Acc]['length'] extends 3 | 6 | 9 ? true : false
      : [...CreateArrayOfLength<N>, ...Acc]['length'] extends number 
        ? IsDivisibleBy3<[...CreateArrayOfLength<N>, ...Acc]['length']>
        : never;

type FizzBuzz<N extends number, Acc extends string[] = []> = 
  Acc['length'] extends N
    ? Acc
    : IsDivisibleBy5<['', ...Acc]['length']> extends true
      ? IsDivisibleBy3<['', ...Acc]['length']> extends true
        ? FizzBuzz<N, [...Acc, 'FizzBuzz']>
        : FizzBuzz<N, [...Acc, 'Buzz']>
      : IsDivisibleBy3<['', ...Acc]['length']> extends true
        ? FizzBuzz<N, [...Acc, 'Fizz']>
        : FizzBuzz<N, [...Acc, `${['', ...Acc]['length']}`]>