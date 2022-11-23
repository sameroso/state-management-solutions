import { CounterStoreInitialState } from "../counterStore/counterStore";
import useDispatchCounter from "../counterStore/useDispatchCounter";
import useSelectorCounter from "../counterStore/useSelectorCounter";

const selectCount4 = (state: CounterStoreInitialState) =>
  state.countOptions.key;

const Counter4 = () => {
  const state = useSelectorCounter(selectCount4);
  const dispatch = useDispatchCounter();
  const inc = () => {
    dispatch((prev) => ({
      ...prev,
      countOptions: { ...prev.countOptions, key: prev.countOptions.key + 1 },
    }));
  };
  return (
    <div>
      countOptions key 4: {state} <button onClick={inc}>+1</button>
    </div>
  );
};

export default Counter4;
