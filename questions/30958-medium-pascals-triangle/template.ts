/**
 * This type is a helper that returns the next unknown array with the length of the next value in a row.
 * 
 * Small visualization (numbers are length of arrays)
 * Previous Row: [1, 6, 15, 20, 15, 6, 1]
 * CurrentRowIndex: [1, 7, 21] -> so CurrentRowIndex['length] = 3 and Tail['length'] = 2
 * So the next value is [...PreviousRow[3], ...PreviousRow[2]] so length of result array is 20 + 15 = 35
 * So the next value will be 35 => [1, 7, 21, 35]
 */
type NextValueInRow<
  CurrentRowIndex extends unknown[],
  PreviousRow extends unknown[][] 
> = CurrentRowIndex['length'] extends 0
  ? [unknown] // If the length is 0, return an array with one unknown element, so the value must be 1
  : [
      ...PreviousRow[CurrentRowIndex['length']], 
      // Append the next value in the row by decrementing the index by 1
      ...PreviousRow[CurrentRowIndex extends [infer _, ...infer Tail] ? Tail['length'] : 0]
    ];

// This is a helper type that converts Pascal Triangle represented by unknown arrays to numbers.
type ConvertToNumber<
  UnknownPascal extends unknown[][][],
  N extends unknown[] = [],
  K extends unknown[] = [],
  ConvertedPascalRow extends number[] = [],
  ConvertedPascal extends number[][] = [],
> = N['length'] extends UnknownPascal['length']
      ? ConvertedPascal
      : K['length'] extends UnknownPascal[N['length']]['length']
        ? ConvertToNumber<UnknownPascal, [...N, unknown], [], [], [...ConvertedPascal, ConvertedPascalRow]>
        : ConvertToNumber<UnknownPascal, N, [...K, unknown], [...ConvertedPascalRow, UnknownPascal[N['length']][K['length']]['length']], ConvertedPascal>

type Pascal<
  N extends number,
  RowCount extends unknown[] = [], 
  PreviousRow extends unknown[][] = [],
  CurrentRow extends unknown[][] = [],
  Acc extends unknown[][][] = []
> = 
  RowCount['length'] extends N
    ? ConvertToNumber<Acc>
    : CurrentRow['length'] extends RowCount['length']
      ? Pascal<N, [unknown, ...RowCount], [...CurrentRow, [unknown]], [], [...Acc, [...CurrentRow, [unknown]]]>
      : Pascal<N, RowCount, PreviousRow, [...CurrentRow, NextValueInRow<CurrentRow, PreviousRow>], Acc>;
