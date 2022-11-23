import store from "../store";
import useStore from "../useStore";

const Counter3 = () => {
  const [state, setState] = useStore(store);
  const inc3 = () => {
    setState((prev) => ({
      ...prev,
      count2: prev.count2 + 1,
    }));
  };
  return (
    <div>
      {state.count2} <button onClick={inc3}>+1</button>
    </div>
  );
};

export default Counter3