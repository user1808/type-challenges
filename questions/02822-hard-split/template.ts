type Split<S extends string, SEP extends string | never = never> =
  string extends S
  ? S[]
  : S extends `${infer Pre}${SEP}${infer After}`
    ? [`${Pre}`, ...Split<After, SEP>]
    : S extends SEP 
      ? [] 
      : [S];
