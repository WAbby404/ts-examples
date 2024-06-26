// Common TS operators and what they mean

// typeof and instanceof: type query used for refinement
// keyof: get keys of an object. keyof T is an operator to tell you what values of k can be used for obj[k].
// O[K]: property lookup
// [K in O]: mapped types
// + or - or readonly or ?: addition and subtraction and readonly and optional modifiers
// x ? Y : Z: Conditional types for generic types, type aliases, function parameter types

// /  !: Nonnull assertion for nullable types
const link = document.querySelector('a')!;
// Here we're telling TS that we are certain there is an anchor tag
// we are telling the compiler explicitly that an expression has a value other than null or undefined

// =: Generic type parameter default for generic types
// as: type assertion
// is: type guard for function return types