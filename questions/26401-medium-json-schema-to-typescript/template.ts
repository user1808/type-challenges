// Not my solution:
type Item = {
  type: string
  enum?: any[]
  items?: Item
  properties?: Record<string, Item>
  required?: string[]
}

type JSONSchema2TS<T extends Item> = 
  T['enum'] extends PropertyKey[]
    ? T['enum'][number] 
    : T['type'] extends 'string'
      ? string
      : T['type'] extends 'number'
        ? number
        : T['type'] extends 'boolean'
          ? boolean
          : T['type'] extends 'array'
            ? T['items'] extends Item
              ? JSONSchema2TS<T['items']>[]
              : unknown[]
            : T['type'] extends 'object'
              ? T['properties'] extends Record<string, Item>
                ? T['required'] extends string[]
                  ? Omit<{
                      [K in T['required'][number]]: JSONSchema2TS<T['properties'][K]>
                    } & {
                      [K in keyof T['properties']]?: JSONSchema2TS<T['properties'][K]>
                    }, never>
                  : {
                    [K in keyof T['properties']]?: JSONSchema2TS<T['properties'][K]>
                  }
                : Record<string, unknown>
              : never
