import { useReducer } from "react";
import reducer from "./reducer";

const useReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, text: "hi" });
  return [state, dispatch] as const;
};

export default useReducerHook;
