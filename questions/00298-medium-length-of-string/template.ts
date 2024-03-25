type LengthOfString1<S extends string, Acc extends unknown[] = []> = S extends `${infer _}${infer B}`
  ? LengthOfString1<B, [...Acc, unknown]> 
  : Acc['length'];
