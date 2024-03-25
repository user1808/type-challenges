type Trunc<T extends string | number> = 
  `${T}` extends `${infer Head}.${infer _}` 
    ? Head extends '' ? '0' : Head 
    : `${T}`;
