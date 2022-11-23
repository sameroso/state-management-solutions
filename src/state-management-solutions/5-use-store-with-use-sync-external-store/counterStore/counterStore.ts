import createStore from "../store/createStore";

const counterStore = createStore({
  count1: 0,
  count2: 0,
  countOptions: { key: 1, key2: 2 },
});

export default counterStore;

export type CounterStoreInitialState = ReturnType<typeof counterStore.getState>;
