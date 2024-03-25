enum Comparison {
  Greater,
  Equal,
  Lower,
}

type Comparator<A extends number, B extends number> = A extends B
  ? Comparison.Equal
  : `${A}` extends `-${infer NumberA extends number}`
    ? `${B}` extends `-${infer NumberB extends number}`
      ? GreaterThan<NumberA, NumberB> extends false
        ? Comparison.Greater
        : Comparison.Lower
      : Comparison.Lower
    : `${B}` extends `-${number}`
      ? Comparison.Greater
      : GreaterThan<A, B> extends true
        ? Comparison.Greater
        : Comparison.Lower;
