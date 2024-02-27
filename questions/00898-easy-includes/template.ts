// This Equal comes from type-challenges/utils
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;

type Includes<T extends readonly any[], U> = T extends [infer Head, ...infer Tail] 
  ? Equal<Head, U> extends true
    ? true 
    : Includes<Tail, U>
  : false;