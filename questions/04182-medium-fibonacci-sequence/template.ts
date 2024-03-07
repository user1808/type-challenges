type Fibonacci<T extends number, Acc extends unknown[] = [], T0 extends unknown[] = [], T1 extends unknown[] = []> = 
  Acc['length'] extends T
    ? [...T0, ...T1]['length']
    : Fibonacci<
        T, 
        [unknown, ...Acc], 
        Acc['length'] extends 0 | 1 ? T0 : T1, 
        Acc['length'] extends 0 | 1 ? [unknown] : [...T0, ...T1]
      >;
