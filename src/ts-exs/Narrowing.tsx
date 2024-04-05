// Occurs when a variable moves from a less precise type to a more precise type
let age = getUserAge();
age;

if (typeof age === "string") {
  age;
}

// In TS, a variable can move from a less precise type to a more precise type (called narrowing)
// Ex: how TS narrws down the less specific type of string | number to a more specific type with if statements & typeof
function addAnother(val: string | number) {
  if (typeof val === "string") {
    // TypeScript treats `val` as a string in this block, so we can use string methods on `val` and TypeScript won't shout at us
    return val.concat(" " + val);
  }

  // TypeScript knows `val` is a number here
  return val + val;
}

console.log(addAnother("Woooo")); // Woooo Woooo
console.log(addAnother(20)); // 40

// Another EX, with a union type allVehicles which can be a Plane or Train

interface Vehicle {
  topSpeed: number;
}

// All trains must now have a type property equal to 'Train'
interface Train extends Vehicle {
  type: "Train";
  carriages: number;
}

// All trains must now have a type property equal to 'Plane'
interface Plane extends Vehicle {
  type: "Plane";
  wingSpan: number;
}

type PlaneOrTrain = Plane | Train;

// Now we, and TypeScript, can narrow down the type of v:
function getSpeedRatio(v: PlaneOrTrain) {
  if (v.type === "Train") {
    // TypeScript now knows that `v` is definitely a `Train`. It has narrowed down the type from the less specific `Plane | Train` type, into the more specific `Train` type
    return v.topSpeed / v.carriages;
  }

  // If it's not a Train, TypeScript narrows down that `v` must be a Plane - smart!
  return v.topSpeed / v.wingSpan;
}

let bigTrain: Train = {
  type: "Train",
  topSpeed: 100,
  carriages: 20,
};

console.log(getSpeedRatio(bigTrain)); // 5
