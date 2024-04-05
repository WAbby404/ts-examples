type AppProps = {
  message: string;
};

// easiest way to declare a fn component; return type is inferred
const App = ({ message }: AppProps) => <div>{message}</div>;

// annotate return type fo an error is returned if you accidentally return some other type
const App2 = ({ message }: AppProps): React.JSX.Element => <div>{message}</div>;

// inline type declaration, eliminates nameing the prop types, but looks repetitive
const App3 = ({ message }: { message: string }) => <div>{message}</div>;

const apple = (seeds: AppProps) => {
  console.log(seeds.cyanide);
};

// Person should be a React functional component that accepts a props obj with the props name (string) & age (number)
interface PersonProps {
  name: string;
  age: number;
}

// I geuss this is a different way to write that Person is a FN component (like the Apps above )
const Person: React.FC<PersonProps> = ({ name, age }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};

// then we can import this in another file
import Person from "./components/Person";

// make sure to give it the right props or TS will give an error
const App4: React.FC = () => {
  return (
    <div>
      <Person name="John" age={48} />
    </div>
  );
};

export default App;
