// I have seen simpler solution (the rule is the same, but it was much shorter), 
// but this is my solution, so I'll leave it as it is
type GetRequired<T extends object, K = Required<T>> = {
  [Key in keyof T as Key extends keyof K ? T[Key] extends K[Key] ? Key : never : never]: T[Key]; 
}
