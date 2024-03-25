type AllCombinations<S extends string, Union extends string = '', UnionCopy extends string = Union> = S extends `${infer Head}${infer Tail}`
  ? AllCombinations<Tail, Head | Union>
  : Union extends infer UnionElement 
    ? UnionElement | (UnionElement extends string ? `${UnionElement}${AllCombinations<S, Exclude<UnionCopy, UnionElement>>}` : never)
    : never;
