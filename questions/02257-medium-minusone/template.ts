// convert string to number
type StringToNumber<S extends string> = S extends `${infer R extends number}`
  ? R
  : never;

// reverse string
type MinusOneReverse<S extends string> = S extends `${infer Head}${infer Tail}` 
  ? `${ReverseString<Tail>}${Head}`
  : '';

// return new digit
type MinusOneNewDigit<S extends string> = '09876543210' extends `${string}${S}${infer NewDigit}${string}` 
  ? NewDigit 
  : never;

// calculate 
type CalculateMinusOne<S extends string> = S extends `${infer Head}${infer Tail}`
  ? MinusOneNewDigit<Head> extends '9'
    ? `${MinusOneNewDigit<Head>}${CalculateMinusOne<Tail>}`
    : `${MinusOneNewDigit<Head>}${Tail}`
  : never;

type MinusOne<T extends number> = StringToNumber<MinusOneReverse<T extends 0
  // if 0
  ? '1-'
  // if not 0
  : MinusOneReverse<`${T}`> extends `${infer Head}${infer SecondHead}${infer Tail}`
    // if number
    ? CalculateMinusOne<`${Head}${SecondHead}${Tail}`> extends `${infer R}0`
      // if after calculations first digit is equal to 0
      ? R
      // if after calculations first digit is not equal to 0
      : CalculateMinusOne<`${Head}${SecondHead}${Tail}`>
    // if digit
    : MinusOneNewDigit<`${T}`>
>>;
