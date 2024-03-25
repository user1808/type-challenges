type TrimLeft<S extends string> = S extends `${infer Head}${infer Tail}` 
  ? Head extends ' ' | '\t' | '\n'
    ? TrimLeft<Tail> 
    : `${Head}${Tail}`
  : '';
