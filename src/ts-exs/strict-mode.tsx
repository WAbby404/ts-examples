// In tsconfig.json, it is recommended to set strict to true.
// One helpful feature of strict mode is No Implicit Any:

// Error: Parameter "a" implicitly has an 'any' type.
function logName(a) {
    console.log(a.name);
}