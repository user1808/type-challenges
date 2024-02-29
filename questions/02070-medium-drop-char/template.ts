type DropChar<S extends string, C extends string, Acc extends string = ''> = S extends `${infer Head}${infer Tail}`
  ? Head extends C
    ? DropChar<Tail, C, Acc>
    : DropChar<Tail, C, `${Acc}${Head}`>
  : Acc;

// Other Solution
// type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}` ? DropChar<`${L}${R}`, C> : S;
