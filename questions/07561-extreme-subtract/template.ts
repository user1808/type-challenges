// M => minuend, S => subtrahend
type Subtract<M extends number, S extends number> = 
  CreateArrayOfLength<M> extends [...CreateArrayOfLength<S>, ...infer Rest] ? Rest['length'] : never;
