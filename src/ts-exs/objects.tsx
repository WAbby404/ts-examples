// Objects in TS must have all the correct properties & value types
let person: {
    name: string;
    isProgrammer: boolean;
};

person = {
    name: "Danny",
    isProgrammer: true,
}

// Error - no age prop on person object
person.age = 26;

// Error - should be boolean
person.isProgrammer = 'yes';