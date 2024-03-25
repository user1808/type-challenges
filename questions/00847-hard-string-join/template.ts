type JoinReturn<Parts extends string[], Delimiter extends string> = 
  Parts extends [infer Head extends string, ...infer Tail extends string[]]
    ? `${Head}${Tail extends [] ? '' : Delimiter}${JoinReturn<Tail, Delimiter>}`
    : '';

declare function join<Delimiter extends string>(delimiter: Delimiter): <Parts extends string[]>(...parts: Parts) => JoinReturn<Parts, Delimiter>
