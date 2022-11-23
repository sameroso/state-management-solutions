import { useSyncExternalStore } from "react";
import { Store } from "./types";

const useStoreSelector = <T, S>(store: Store<T>, selector: (state: T) => S) => {
  // const [state, setState] = useState(() => selector(store.getState()));
  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     setState(selector(store.getState()));
  //   });
  //   setState(selector(store.getState()));
  //   return unsubscribe;
  // }, [store, selector]);

  const state = useSyncExternalStore(store.subscribe, () =>
    selector(store.getState())
  );
  
  return state;
};

export default useStoreSelector;
