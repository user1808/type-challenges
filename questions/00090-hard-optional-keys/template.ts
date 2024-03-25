type OptionalKeys<T extends object> = keyof {
  [Key in keyof T as T[Key] extends Required<T>[Key] ? never : Key]: T[Key]
}
