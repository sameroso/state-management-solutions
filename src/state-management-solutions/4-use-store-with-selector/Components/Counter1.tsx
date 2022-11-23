import useDispatchCounter from "../counterStore/useDispatchCounter";
import useSelectorCounter from "../counterStore/useSelectorCounter";

const Counter1 = () => {
  const state = useSelectorCounter((state) => state.count1);
  const dispatch = useDispatchCounter()

  const inc = () => {
    dispatch((prev) => ({
      ...prev,
      count1: prev.count1 + 1,
    }));
  };

  return (
    <div>
      count1: {state} <button onClick={inc}>+1</button>
    </div>
  );
};

export default Counter1;
