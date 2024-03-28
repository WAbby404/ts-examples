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

