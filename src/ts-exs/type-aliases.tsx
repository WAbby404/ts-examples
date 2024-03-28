// Allows you to create a new name for an exsisting type.
// They can help to reduce code duplication.
// They're similar to interfaces, but can also describe primitive types.

type StringOrNum = string | number;
let id: StringOrNum = 24;