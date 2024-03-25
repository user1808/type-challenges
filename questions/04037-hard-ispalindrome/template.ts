type IsPalindrome<T extends string | number> = 
  `${T}` extends `${infer Head}${infer Tail}` 
    ? Tail extends ''
      ? true
      : `${T}` extends `${Head}${infer Middle}${Head}`
        ? IsPalindrome<Middle>
        : false
    : true;
