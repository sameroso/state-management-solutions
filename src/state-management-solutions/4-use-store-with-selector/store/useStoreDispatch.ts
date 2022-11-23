import { useCallback } from "react";
import { Store, Action } from "./types";

export default function useStoreDispatch<T>(store: Store<T>) {
  const dispatcher = useCallback(
    (dispatcher: Action<T>) => store.setState(dispatcher),
    [store]
  );
  return dispatcher;
}
