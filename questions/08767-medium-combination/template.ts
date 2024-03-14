// Slightly modified exercise 4260
type Combination<T extends string[], Union extends string = '', UnionCopy extends string = Union> =  T extends [infer Head extends string, ...infer Tail extends string[]]
  ? Combination<Tail, Head | Union>
  : Union extends infer UnionElement 
    ? UnionElement extends '' ? never : UnionElement | (UnionElement extends string ? `${UnionElement} ${Combination<T, Exclude<UnionCopy, UnionElement>>}` : never)
    : never;
