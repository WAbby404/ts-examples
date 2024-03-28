// We can define what kind of data an array can contain
let ids: number[] = [];
ids.push(1);

// Error
ids.push('2');

// Use a union type for arrays with multiple types
let options: (string | number)[];
options = [10, 'UP'];

// if a value is assigned, TS will infer the types in the array
let person = ['Delia', 48];
// Error, only strings or numbers allowed
person[0] = true;