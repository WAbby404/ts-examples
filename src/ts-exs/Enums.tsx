// A set of related values, as a set of descriptive constants
enum ResourceType {
  BOOK,
  FILE,
  FILM,
}

ResourceType.BOOK;
ResourceType.FILE;

// From TS article
// Allows us to define or declare a collection of related values (related constants), can be numbers or strings, as a set of named constants
// By default, enums are number based, they store string values as numbers (but they can also be strings)
// can help prevent bugs, Intellisense pops up with options
enum ResourceType2 {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

console.log(ResourceType2.BOOK);
console.log(ResourceType2.AUTHOR);

// To start from 1

enum ResourceType3 {
  BOOK = 1,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

console.log(ResourceType3.BOOK); // 1
console.log(ResourceType3.AUTHOR); // 2

// String example

enum Direction {
  Up = "Up",
  Right = "Right",
  Down = "Down",
  Left = "Left",
}

console.log(Direction.Right); // Right
console.log(Direction.Down); // Down
