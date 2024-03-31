// Generics allow for type safety in components where the arguments & return types
interface HasLength {
    length: number;
}

// logLength accepts all types with a length property
const logLength = <T extends HasLength>(a: T) => {
        console.log(a.length);
};

// TS 'captures' the type implicitly
logLength('Hello');

// Can also explicitly pass the type to T
logLength<number[]>([1,2,3]);



// Declare a type, T, which can change in your interface
interface Dog<T> {
    breed: string;
    treats: T;
}

// We have to pass in a type argument
let labrador: Dog<string> = {
    breed: 'labrador',
    treats: 'chew sticks, tripe'
};

let scottieDog: Dog<string[]> = {
    breed: 'scottish terrier',
    treats: ['turkey', 'haggis'],
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
    color: 'grey tabby'
};

let harold: Cat<string[]> = {
    stripes: false,
    color: ['black', 'red', 'white'],
};


interface Pretzel<T> {
    soft: boolean,
    toppings : T
}

let stanley: Pretzel<string[]> = {
    soft: true,
    toppings: ['salt', 'syrup', 'mayonnaise']
}

let micheal: Pretzel<string> = {
    soft: true,
    toppings: 'everything'
}

