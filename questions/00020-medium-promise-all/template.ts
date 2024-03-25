declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [key in keyof T]: Awaited<T[key]>
}>
