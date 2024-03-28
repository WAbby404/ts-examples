type AppProps = {
    message: string;
}

// easiest way to declare a fn component; return type is inferred
const App = ({ message }: AppProps) => <div>{message}</div>;

// annotate return type fo an error is returned if you accidentally return some other type
const App = ({ message }: AppProps): React.JSX.Element => <div>{message}</div>

// inline type declaration, eliminates nameing the prop types, but looks repetitive
const App = ({ message }: { message: string }) => <div>{message}</div>;