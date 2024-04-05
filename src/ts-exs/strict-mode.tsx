// In tsconfig.json, it is recommended to set strict to true.
// One helpful feature of strict mode is No Implicit Any:

// Error: Parameter "a" implicitly has an 'any' type.
function logName(a) {
  console.log(a.name);
}

// TS article also suggests turning strict mode on (in tsconfig)
// Why?
// 1. No Implicit Any - TS will immediately flag an error if we dont explicitly state the type of a
// 2. Strict null checks - when true, null & undefined have their own types
//                       - you'll get a type error if you assign them to a variable that expects a concrete value
