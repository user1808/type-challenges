type DeepObjectToUniq<O extends object> = {
  [Key in keyof O]: O[Key] extends object ? DeepObjectToUniq<O[Key]> & { [unique: symbol]: [O, Key] } : O[Key]
} & { [unique: symbol]: O };
