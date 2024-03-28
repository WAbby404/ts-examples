// Primitive Types
// 7 primitive types in JS: string, number, bigInt, boolean, undefined, null & symbol

// Explicit type annotation
let firstname: string = 'Danny';


// Union Types
// A variable that can be assigned more than one type
let age: number | string;
age = 26;
age = '26';


// Dynamic Types
// The any type basically reverts TS back to JS.
let age2: any = 100;
age2 = true;


// Literal Types
// We can refer to specific strings & numbers in type positions
let direction: 'UP' | 'DOWN';
direction = 'UP';