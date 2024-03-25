type GetMiddleElement<T extends unknown[]> = T extends [infer _, ...infer B, infer _]
  ? T['length'] extends 2 ? T : GetMiddleElement<B>
  : T;
