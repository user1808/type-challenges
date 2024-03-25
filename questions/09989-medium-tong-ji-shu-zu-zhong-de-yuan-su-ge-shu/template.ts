type CountElementNumberToObjectHelper<T extends Record<keyof any, unknown[]>> = {
  [K in keyof T]: T[K]['length']
};

type CountElementNumberToObject<T extends unknown[], Acc extends Record<keyof any, unknown[]> = {}> = 
  Flatten<T> extends [infer Head, ...infer Tail]
    ? CountElementNumberToObject<
      Tail,
      {
        [K in keyof Acc | (Head extends keyof any ? Head : never)]: K extends keyof Acc 
          ? Head extends K ? [...Acc[K], unknown] : Acc[K] 
          : [unknown]
      }
    >
    : CountElementNumberToObjectHelper<Acc>;
