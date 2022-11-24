import { createContext, ReactNode, useContext, useRef } from "react";
import createStore from "../createStore";
import { Store } from "../types";

const createStoreContext = <TState,>(state: TState) => {
  const StoreContext = createContext<Store<TState>>(createStore<TState>(state));

  const StoreProvider = ({
    initialState,
    children,
  }: {
    initialState?: TState;
    children: ReactNode;
  }) => {
    const context = useContext(StoreContext);
    const storeRef = useRef<Store<TState>>(
      createStore(initialState || context.getState())
    );

    return (
      <StoreContext.Provider value={storeRef.current}>
        {children}
      </StoreContext.Provider>
    );
  };

  return [StoreContext, StoreProvider] as const;
};

export default createStoreContext;
