type UnionToIntersection<U> = (U extends any ? (arg: U) => any : never) extends ((arg: infer I) => any) ? I : never
