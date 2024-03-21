type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type AddZero<T extends number> = T extends Digits ? `0${T}` : `${T}`

type MonthDict = {
  '01': AddZero<NumberRange<1, 31>>;
  '02': AddZero<NumberRange<1, 28>>;
  '03': AddZero<NumberRange<1, 31>>;
  '04': AddZero<NumberRange<1, 30>>;
  '05': AddZero<NumberRange<1, 31>>;
  '06': AddZero<NumberRange<1, 30>>;
  '07': AddZero<NumberRange<1, 31>>;
  '08': AddZero<NumberRange<1, 31>>;
  '09': AddZero<NumberRange<1, 30>>;
  '10': AddZero<NumberRange<1, 31>>;
  '11': AddZero<NumberRange<1, 30>>;
  '12': AddZero<NumberRange<1, 31>>;
}

type ValidDate<T extends string> = 
  T extends `${infer DayDigit1 extends number}${infer DayDigit2 extends number}${infer MonthDigits}` 
  ? `${DayDigit1}${DayDigit2}` extends keyof MonthDict
    ? `${MonthDigits}` extends MonthDict[`${DayDigit1}${DayDigit2}`]
      ? true
      : false
    : false
  : false;
