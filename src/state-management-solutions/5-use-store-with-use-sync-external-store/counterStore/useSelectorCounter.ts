import { useRef } from "react";
import store, { CounterStoreInitialState } from "./counterStore";
import useStoreSelector from "../store/useStoreSelector";

export default function useSelectorCounter<S>(
  callback: (state: CounterStoreInitialState) => S
) {
  const callbackRef = useRef(callback);
  const selector = useStoreSelector(store, callbackRef.current);
  return selector;
}
