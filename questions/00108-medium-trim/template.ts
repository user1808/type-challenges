// My Solution:
type ReverseString<S extends string> = S extends `${infer Head}${infer Tail}` 
  ? `${ReverseString<Tail>}${Head}`
  : '';

type Trim<S extends string, Reversed extends boolean = false> = S extends `${infer Head}${infer Tail}`
  ? Head extends ' ' | '\t' | '\n' 
    ? Trim<Tail, Reversed>
    : Reversed extends true 
      ? ReverseString<`${Head}${Tail}`>
      : Trim<ReverseString<`${Head}${Tail}`>, true>
  : '';

// Much simpler solution, but unfortunately not mine
// type Space = ' ' | '\t' | '\n';

// type Trim<S extends string> = S extends `${Space}${infer T}` | `${infer T}${Space}` ? Trim<T> : S;
