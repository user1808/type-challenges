type ParseUrlParams<T extends string> = T extends `${infer _}:${infer R}/${infer Rest}`
  ? R | ParseUrlParams<Rest>
  : T extends `${infer _}:${infer R}`
    ? R
    : never;
