// We can define the types of the arguments, and the returrn type. 
// Below, :string could be omitted because TS would infer the return type
function circle(diam: number): string {
    return 'Circumf = ' + Math.PI * diam;
}

// the same fn as an ES6 arrow
const circle = (diam: number): string => 'Circumf = ' + Math.PI * diam;

// If we want to declare a fn, but not define it, use a fn signature
let sayHi: (name: string) => void;
sayHi = (name: string) => console.log('Hi ' + name);
sayHi('Danny');
// Hi Danny