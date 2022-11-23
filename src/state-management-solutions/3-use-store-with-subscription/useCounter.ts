import store from "./store";
import useStore from "./useStore";

export default function useCounter() {
  const [counter, setCount] = useStore(store);
  return [counter, setCount] as const;
}
