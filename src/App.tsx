import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector} from "./redux/hook";


const App = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className=" m-10 flex items-center space-x-5">
      <button
        onClick={() => dispatch(incrementByValue(10))}
        className="p-2 rounded-md bg-green-300 hover:bg-green-400 duration-300"
      >
        Increment by 10
      </button>
      <button
        onClick={() => dispatch(increment())}
        className="p-2 rounded-md bg-green-300 hover:bg-green-400 duration-300"
      >
        Increment
      </button>
      <h1 className="text-2xl">{count}</h1>
      <button
        onClick={() => dispatch(decrement())}
        className="p-2 rounded-md bg-green-300 hover:bg-green-400 duration-300"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(decrementByValue(10))}
        className="p-2 rounded-md bg-green-300 hover:bg-green-400 duration-300"
      >
        Decrement by 10
      </button>
    </div>
  );
};

export default App;
