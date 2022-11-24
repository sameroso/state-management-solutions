import { useContext, useRef } from "react";
import counterStore, { CounterStoreInitialState } from "./counterStore";
import useStoreSelector from "../store/useStoreSelector";

export default function useSelectorCounter<S>(
  callback: (state: CounterStoreInitialState) => S
) {
  const callbackRef = useRef(callback);
  const StoreContext = useContext(counterStore.Context);
  const selector = useStoreSelector(StoreContext, callbackRef.current);
  return selector;
}
