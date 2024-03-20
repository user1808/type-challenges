type Test = MutableKeys<{ a: number, readonly b: string }> ;

type MutableKeys<T extends object> = keyof {
  [K in keyof T as Equal<Readonly<Pick<T, K>>, Pick<T, K>> extends true ? never : K]: ''
}
