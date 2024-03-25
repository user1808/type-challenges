type CamelCaseHelper<S extends string> = S extends `${infer Head}${infer Tail}`
? Capitalize<Tail> extends Tail
  ? `${Head}${CamelCaseHelper<Uncapitalize<Tail>>}`
  : Head extends '_'
    ? `${CamelCaseHelper<Capitalize<Tail>>}`
    : `${Head}${CamelCaseHelper<Tail>}`
: S;

type CamelCase<S extends string> = CamelCaseHelper<Lowercase<S>>;
