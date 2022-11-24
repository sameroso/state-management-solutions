import counterStore, { CounterStoreInitialState } from "./counterStore";
import { Action } from "../store/types";
import useStoreDispatch from "../store/useStoreDispatch";
import { useCallback, useContext } from "react";

export default function useDispatchCounter() {
  const StoreContext = useContext(counterStore.Context);
  const storeDispatcher = useStoreDispatch(StoreContext);
  const dispatcher = useCallback(
    (action: Action<CounterStoreInitialState>) => storeDispatcher(action),
    [storeDispatcher]
  );
  return dispatcher;
}
