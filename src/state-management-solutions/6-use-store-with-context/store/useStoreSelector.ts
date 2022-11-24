import { useSyncExternalStore } from "react";
import { Store } from "./types";

const useStoreSelector = <T, S>(store: Store<T>, selector: (state: T) => S) => {
  const state = useSyncExternalStore(store.subscribe, () =>
    selector(store.getState())
  );
  
  return state;
};

export default useStoreSelector;
