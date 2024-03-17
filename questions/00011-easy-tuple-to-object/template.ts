type TupleToObject<T extends readonly (keyof any)[]> = {
  [P in T[number]]: P
}
