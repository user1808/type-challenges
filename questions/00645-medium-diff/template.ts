type Diff<O extends object, O1 extends object> = Omit<O & O1, keyof (O | O1)>;
// My Solution (much more complicated)
// {
//   [K in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: 
//     K extends keyof O 
//       ? O[K] 
//       : K extends keyof O1 
//         ? O1[K] 
//         : never;
// }
