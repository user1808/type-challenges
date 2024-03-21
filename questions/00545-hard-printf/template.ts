type FormatDict = {
  's': string;
  'd': number;
}

type Format<T extends string> = T extends `${string}%${infer B}${infer Rest}`
  ? B extends keyof FormatDict
    ? (arg: FormatDict[B]) => Format<Rest>
    : Format<Rest>
  : string;
