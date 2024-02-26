type First<T extends unknown[]> = T extends [infer Head, ...args: any[]] ? Head : never;

// T extends [infer Head, ...args: any[]] ? Head : never;
// T extends [] ? never : T[0];
// T['length'] extends 0 ? never : T[0];
// T extends [infer Head, ...infer Tail] ? Head : never;
