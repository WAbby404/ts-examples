type AppProps = {
    message: string;
    count: number;
    disabled: boolean;

    // an array of a specific type
    names: string[];

    // string literals - specify exact string values, with a union type to join them together
    status: 'waiting' | 'success';

    // object with known properties (but could have more at runtime)
    obj: {
        id: string;
        title: string;
    }

    // array of objects
    objArr: {
        id: string;
        title: string;
    }[];

    // any non-primitive value - cant access any properties (NOT COMON, but useful as placeholder)
    obj2: object;

    // an interface with no required peroperties (NOT COMMON, except for things like `React.Component<{}, State`)
    obj3: {};

    // a dictionary obj with any number of properties of the same type
    dict1: {
        [key1: string]: MyTypeHere;
    };
    // this is the same as dict1
    dict2: Record<string, MyTypeHere>; 

    // * fn that doesnt take or return anything (VERY COMMON)
    onClick: () => void;

    // * fn with named prop (VERY COMMON)
    onChange: (id: number) => void

    // * fn type syntax that takes an event (VERY COMMON)
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    // * alternative, takes a mouse event (VERY COMMON)
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;

    // ! any fn as long as you dont invoke it (not recommended)
    onSomething: Function;

    // * optional prop (VERY COMMON)
    optional?: OptionalType;

    // when passing down state setter fn returned by useState to a child component
    setState: React.Dispatch<React.SetStateAction<number>>;
}