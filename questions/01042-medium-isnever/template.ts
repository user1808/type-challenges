/**
 * Distributive Conditional Types -> but never is like an empty union,
 * so T extends never, while T = never will never be distributed -> never ? true : false -> 
 * -> never instead of true or false
 * So, you just got to wrap it with [], and voila!
 */

type IsNever<T> = [T] extends [never] ? true : false;
