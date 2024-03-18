type Test = GetOptional<{ foo: number, bar?: string }>;

type GetOptional<T extends object> = {
  [Key in keyof T as T[Key] extends Required<T>[Key] ? never : Key]: T[Key]
}
