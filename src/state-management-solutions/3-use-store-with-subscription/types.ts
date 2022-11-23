export type Store<T> = {
    getState: () => T;
    setState: (action: T | ((prev: T) => T)) => void;
    subscribe: (callback: () => void) => () => void;
  };
  