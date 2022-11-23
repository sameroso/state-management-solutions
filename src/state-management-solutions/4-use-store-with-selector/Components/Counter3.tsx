import { CounterStoreInitialState } from "../counterStore/counterStore";
import useDispatchCounter from "../counterStore/useDispatchCounter";
import useSelectorCounter from "../counterStore/useSelectorCounter";

const selectCount3 = (state: CounterStoreInitialState) => state.countOptions;

const Counter3 = () => {
  const state = useSelectorCounter(selectCount3);
  const dispatch = useDispatchCounter();
  const inc = () => {
    dispatch((prev) => ({
      ...prev,
      countOptions: { ...prev.countOptions, key2: prev.countOptions.key2 + 1 },
    }));
  };
  return (
    <div>
      countOptions: {JSON.stringify(state)} <button onClick={inc}>+1</button>
    </div>
  );
};

export default Counter3;
