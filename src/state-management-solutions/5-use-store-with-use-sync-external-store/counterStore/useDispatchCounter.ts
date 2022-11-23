import store, { CounterStoreInitialState } from "./counterStore";
import { Action } from "../store/types";
import useStoreDispatch from "../store/useStoreDispatch";
import { useCallback } from "react";

export default function useDispatchCounter() {
  const storeDispatcher = useStoreDispatch(store);
  const dispatcher = useCallback(
    (action: Action<CounterStoreInitialState>) => storeDispatcher(action),
    [storeDispatcher]
  );
  return dispatcher;
}
