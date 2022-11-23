export type Action<T> = T | ((prev: T) => T);

export type Store<T> = {
  getState: () => T;
  setState: (action: Action<T>) => void;
  subscribe: (callback: () => void) => () => void;
};
