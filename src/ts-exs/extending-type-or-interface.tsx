// Extending an interface

interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}

const bear: Bear = {
    name: 'Winnie',
    honey: true,
}

// Adding a field to an interface
// Re-opening the Animal interface to add a new field
interface Animal {
    tail: boolean
}

const dog: Animal = {
    name: "Bruce",
    tail: true,
  }

// Extending a type via intersections
type Animal2 = {
    name: string
}

type Bear2 = Animal & {
    honey: boolean
}

const bear2: Bear2 = {
    name: 'Winnie',
    honey: true,
}

// a type cannot be changed after being created