type NumberRange<L extends number, H extends number, Flag extends boolean = false, Acc extends unknown[] = []> = 
  Acc['length'] extends H
    ? [...Acc, H][number]
    : Acc['length'] extends L
      ? NumberRange<L, H, true, [...Acc, Acc['length']]>
      : NumberRange<L, H, Flag, [...Acc, Flag extends true ? Acc['length'] : never]>