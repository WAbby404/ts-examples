// Generics allow for type safety in components where the arguments & return types

// lets you specify values to an object, so when it enters a FN, TS will know what properties the object will have upon return
interface HasLength {
  length: number;
}

// logLength accepts all types with a length property
const logLength = <T extends HasLength>(a: T) => {
  console.log(a.length);
};

// TS 'captures' the type implicitly
logLength("Hello");

// Can also explicitly pass the type to T
logLength<number[]>([1, 2, 3]);

// Declare a type, T, which can change in your interface
interface Dog<T> {
  breed: string;
  treats: T;
}

// We have to pass in a type argument
let labrador: Dog<string> = {
  breed: "labrador",
  treats: "chew sticks, tripe",
};

let scottieDog: Dog<string[]> = {
  breed: "scottish terrier",
  treats: ["turkey", "haggis"],
};

console.log(labrador);
console.log(scottieDog);

interface Cat<T> {
  stripes: boolean;
  color: T;
}

// We have to pass in a type argument
let hammy: Cat<string> = {
  stripes: true,
  color: "grey tabby",
};

let harold: Cat<string[]> = {
  stripes: false,
  color: ["black", "red", "white"],
};

interface Pretzel<T> {
  soft: boolean;
  toppings: T;
}

let stanley: Pretzel<string[]> = {
  soft: true,
  toppings: ["salt", "syrup", "mayonnaise"],
};

let micheal: Pretzel<string> = {
  soft: true,
  toppings: "everything",
};

// TS article example

// <T> is just the convention - e.g. we could use <X> or <A>
const addID = <T extends { name: string }>(obj: T) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};

// This is the same thing, just written explicitly
// let person1 = addID<{ name: string; age: number }>({ name: 'John', age: 40 });

// Generics allow you to have type-safety in components where the arguments and return types are unknown ahead of time.

// In TypeScript, generics are used when we want to describe a correspondence between two values.

// When we don't know what type a certain value in an object will be ahead of time, we can use a generic to pass in the type:
// The type, T, will be passed in
interface PersonHug<T> {
  name: string;
  age: number;
  documents: T;
}

// We have to pass in the type of `documents` - an array of strings in this case
const person1: PersonHug<string[]> = {
  name: "John",
  age: 48,
  documents: ["passport", "bank statement", "visa"],
};

// Again, we implement the `Person` interface, and pass in the type for documents - in this case a string
const person2: PersonHug<string> = {
  name: "Delia",
  age: 46,
  documents: "passport, P45",
};

const ex2: PersonHug<object> = {
  name: "Greg",
  age: 22,
  documents: { passport: "holy cow, this dude travels", photo: true },
};
