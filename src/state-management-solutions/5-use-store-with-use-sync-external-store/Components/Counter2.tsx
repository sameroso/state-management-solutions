import { CounterStoreInitialState } from "../counterStore/counterStore";
import useDispatchCounter from "../counterStore/useDispatchCounter";
import useSelectorCounter from "../counterStore/useSelectorCounter";

const selectCount2 = (state: CounterStoreInitialState) => state.count2;

const Counter2 = () => {
  const state = useSelectorCounter(selectCount2);
  const dispatch = useDispatchCounter();
  const inc = () => {
    dispatch((prev) => ({
      ...prev,
      count2: prev.count2 + 1,
    }));
  };
  return (
    <div>
      count2: {state} <button onClick={inc}>+1</button>
    </div>
  );
};

export default Counter2;
