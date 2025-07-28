import { useSelector } from "react-redux";
import { RootState, useAppDispatch, AppDispatch, increment, decrement } from "@/store/store";

const CounterApp: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default CounterApp;
