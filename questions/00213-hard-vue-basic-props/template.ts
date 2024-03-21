type ComputedValueType<C> = {
  [P in keyof C as C[P] extends () => any
    ? P
    : never]: C[P] extends () => infer R ? R : never;
};

type ConvertInstanceType<T> = T extends new (args: any) => any
  ? T extends typeof String | typeof Boolean | typeof Number
    ? ReturnType<T>
    : InstanceType<T>
  : T;

type ConverArrayPropType<T, U = T> = T extends U
  ? ConvertInstanceType<T>
  : never;

type PropsType<T> = {
  [P in keyof T]: {} extends T[P]
    ? any
    : T[P] extends { type: any }
    ? T[P]["type"] extends (infer R)[]
      ? ConverArrayPropType<R>
      : ConvertInstanceType<T[P]["type"]>
    : ConvertInstanceType<T[P]>;
};

declare function VueBasicProps<Props, Data, Computed, Methods>(options: {
  props: Props;
  data: (this: PropsType<Props>) => Data;
  computed: Computed & ThisType<Computed & Data & PropsType<Props>>;
  methods: Methods &
    ThisType<Data & ComputedValueType<Computed> & Methods & PropsType<Props>>;
}): Props & Data & Methods & Computed;