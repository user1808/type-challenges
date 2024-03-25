type CheckRepeatedChars<T extends string, Acc extends string[] = []> = T extends `${infer Head}${infer Tail}`
  ? IndexOf<Acc, Head> extends -1 
    ? CheckRepeatedChars<Tail, [...Acc, Head]>
    : true
  : false;
