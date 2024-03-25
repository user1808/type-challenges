type ObjectFromEntries<T extends [keyof any, unknown]> = {
  [K in T[0]]: T extends [K, unknown] ? T[1] : never;
}
