type Replace<S extends string, From extends string, To extends string> = From extends '' 
  ? S 
  : S extends `${infer A}${From}${infer B}` 
    ? `${A}${To}${B}` 
    : S;
