import store from "../store";
import useStore from "../useStore";

const Counter4 = () => {
  const [state, setState] = useStore(store);
  const inc4 = () => {
    setState((prev) => ({
      ...prev,
      count2: prev.count2 + 2,
    }));
  };
  return (
    <div>
      {state.count2} <button onClick={inc4}>+2</button>
    </div>
  );
};

export default Counter4