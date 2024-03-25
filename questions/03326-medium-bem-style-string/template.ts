type BEM<B extends string, E extends string[], M extends string[]> = 
  `${B}${E['length'] extends 0 ? '' : `__${E[number]}`}${M['length'] extends 0 ? '' : `--${M[number]}`}`