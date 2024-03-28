// useState
const [ state, useState ] = useState(false);
// inferred to be a boolean

// given a type
const [ user, setUser ] = useState<User | null>(null);
setUser(newUser);

// type assertion if state is initialzied soon after setup & always has a value after
const [ user, setUser ] = useState<User>({} as User);
setUser(newUser);


// useCallback
const memoizedCallback = useCallback(
    (param1: string, param2: number) => {
      console.log(param1, param2)
      return { ok: true }
    },
    [...],
  );


// useReducer
// dont forget to define return type of reducer, otherwise TypeScript will infer it
const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </>
  );
}


// useEffect / useLayoutEffect
// both are used for performing side effects and return an optional cleanup function which means, if they don't deal with returning values, no types are necessary
function Delayedeffect(props: { timerMs: number}) {
    const { timerMS } = props;

    useEffect(
        () =>
            setTimeout(() => {
                // do stuff
            }, timerMS),
        [timerMS]
    );

    return null;
}


// useRef
// in TS, useRef returns a reference that is either read-only or mutable, depends on whether your type argument fully covers the inital value or not. Choose what suits your case

// Option 1: DOM element ref
// to access a DOM element: provide only the element as argument, and use null as an initial value.
function Foo() {
    // be as specific as possible here, HTMLDivElement is better than HTMLElement & way better than Element
    const difRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // ref.current can be null (expected, bc we may conditionally render the ref-ed element or may forget to assign it)
        if(!divRef.current) throw Error('divRef is not assigned');

        // now divRef.current is sure to be HTMLDivElement
        doSomethingWith(divRef.current);
    });

    return <div ref={divRef}>etc</div>;
}

// Option 2: Mutable value ref
// to have a mutable value: provide the type you want & make sure the initial value fully belongs to that type
function Foo() {
    // Technical-wise, this returns MutableRefObject<number | null>
    const intervalRef = useRef<number | null>(null);
  
    // You manage the ref yourself (that's why it's called MutableRefObject!)
    useEffect(() => {
      intervalRef.current = setInterval(...);
      return () => clearInterval(intervalRef.current);
    }, []);
  
    // The ref is not passed to any element's "ref" prop
    return <button onClick={/* clearInterval the ref */}>Cancel timer</button>;
  }


// Custom Hooks
// if returning an array in Custom Hook, avoid type interference as TS will inter a union type, instead use TS const assertions:
export function useLoading() {
  const [isLoading, setState] = useState(false);
  const load = (aPromise: Promise<any>) => {
    setState(true);
    return aPromise.finally(() => setState(false));
  };
  return [isLoading, load] as const; // infers [boolean, typeof load] instead of (boolean | typeof load)[]
}