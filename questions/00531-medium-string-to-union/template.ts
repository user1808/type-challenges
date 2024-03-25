type StringToUnion<T extends string> = T extends `${infer Head}${infer Tail}`
  ? Head | StringToUnion<Tail>
  : never;
