// We can define the types of the arguments, and the return type.
// Below, :string could be omitted because TS would infer the return type

let greet: Function;

greet = () => {
  console.log("Hello!");
};

function circle(diam: number): string {
  return "Circumf = " + Math.PI * diam;
}

// the same fn as an ES6 arrow
const circle = (diam: number): string => "Circumf = " + Math.PI * diam;

// If we want to declare a fn, but not define it, use a fn signature
let sayHi: (name: string) => void;
sayHi = (name: string) => console.log("Hi " + name);
sayHi("Danny");
// Hi Danny

interface Person {
  name: string;
  age: number;
  speak(sentence: string): void;
}

const person: Person = {
  name: "John",
  age: 48,
  speak: (sentence) => console.log(sentence),
};

const fullExample = (value: number = 10): number => {
  return value;
};

const objExample = (ninja: { name: string; age: number }) => {
  console.log(`ninja stuff ${ninja.name}`);
};
