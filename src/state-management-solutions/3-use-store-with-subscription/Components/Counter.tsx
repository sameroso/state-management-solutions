import useCounter from "../useCounter";

const Counter1 = () => {
  const [state, setState] = useCounter();
  const inc = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  return (
    <div>
      {state.count} <button onClick={inc}>+1</button>
    </div>
  );
};

export default Counter1;
