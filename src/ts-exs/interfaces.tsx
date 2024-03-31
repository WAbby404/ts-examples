// Interfaces are used to describe objects.
// Interfaces can always be reopned & extended, unlike Type Aliases.
// Notice that 'name' is 'readonly'

interface Person {
    name: string;
    isProgrammer: boolean;
}

let p1: Person = {
    name: 'Delia',
    isProgrammer: false,
}

// error - read only
p1.name = "Del"

// Two ways to describe a fn in an interface
interface Speech {
    sayHi(name: string): string;
    sayBye: (name: string) => string;
}

let speech: Speech = {
    sayHi: function (name:string) {
        return 'Hi ' + name;
    },
    sayBye: (name: string) => 'Bye ' + name,
}

// Extending an interface
interface Animal {
    name: string;
}

interface Dog2 extends Animal {
    breed: string;
}