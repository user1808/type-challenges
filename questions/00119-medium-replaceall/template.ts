type ReplaceAll<S extends string, From extends string, To extends string> = 
  S extends `${infer A}${From extends '' ? never : From}${infer B}`
    ? `${A}${To}${ReplaceAll<B, From, To>}`
    : S