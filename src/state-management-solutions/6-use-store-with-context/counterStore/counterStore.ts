import createStoreContext from "../store/contextCreator";

export type CounterStoreInitialState = {
  count1: number;
  count2: number;
  countOptions: { key: number; key2: number };
};

const [Context, Provider] = createStoreContext<CounterStoreInitialState>({
  count1: 200,
  count2: 0,
  countOptions: { key: 1, key2: 2 },
});

const CounterStore = { Context, Provider };

export default CounterStore;
