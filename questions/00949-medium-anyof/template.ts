type AnyOf<T extends readonly any[]> = 
  T[number] extends 0 | '' | false | undefined | null | [] | { [key: keyof any]: never }
    ? false 
    : true; 
