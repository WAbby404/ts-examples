// TS doesn't have access to the DOM, so use the non-null operator, !, to tell TS the expression isn't null or undefined
const link = document.querySelector("a")!;

// If an element is selected by id or class, we need to tell TS what type of element it is via Type Casting
const form = document.getElementById("signup-form") as HTMLFormElement;
// (look up what type certain html elements are)
