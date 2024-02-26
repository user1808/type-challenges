const testTuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
type Test = typeof testTuple[number];

type TupleToObject<T extends readonly (keyof any)[]> = {
  [P in T[number]]: P
}
