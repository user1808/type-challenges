type TupleToNestedObject<T extends string[], U> = T extends [infer Head extends string, ...infer Tail extends string[]] 
  ? { [K in Head]: TupleToNestedObject<Tail, U> }
  : U
