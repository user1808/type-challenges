type EnumIndexOf<T extends readonly string[], U, Acc extends unknown[] = []> = 
  T extends readonly [infer Head, ...infer Tail]
    ? Equal<U, Head> extends true
      ? Acc['length']
      : IndexOf<Tail, U, [unknown, ...Acc]>
    : -1

type Enum<T extends readonly string[], N extends boolean = false> = {
  readonly [K in T[number] as Capitalize<K>]: N extends true ? EnumIndexOf<T, K> : K
}
