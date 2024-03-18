type RequiredKeys<T extends object> = keyof {
  [Key in keyof T as T[Key] extends Required<T>[Key] ? Key : never]: T[Key]
}
