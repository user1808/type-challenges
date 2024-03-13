type Helper<T extends {}, U extends {}> = {
  [K in keyof T]: K extends keyof U ? U[K] : T[K];
};

type MapTypes<T extends {}, R extends { mapFrom: unknown; mapTo: unknown }> = Helper<T, {
  [K in keyof T as R extends any ? T[K] extends R['mapFrom'] ? K : never : never]: R extends any
    ? T[K] extends R['mapFrom']
      ? R['mapTo']
      : never
    : never;
}>;
