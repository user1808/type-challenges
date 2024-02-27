type LookUp<U, T> = U extends { type: T } ? U : never;

// My first solution:
// U extends { type: infer R } 
//   ? R extends T 
//     ? U 
//     : never 
//   : never;
