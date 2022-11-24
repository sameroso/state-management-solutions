import Counter1 from "./Components/Counter1";
import Counter2 from "./Components/Counter2";
import Counter3 from "./Components/Counter3";
import Counter4 from "./Components/Counter4";
import CounterStore from "./counterStore/counterStore";

const StoreWithSelectorWithSyncExternalStoreContext = () => (
  <div style={{ border: "1px solid red", margin: "10px", padding: "10px" }}>
    <h1>
      Store with subscription and selector with useSyncExternalStore and context
    </h1>
    <CounterStore.Provider
      initialState={{ count1: 10, count2: 1, countOptions: { key: 1, key2: 1 } }}
    >
      <Counter1 />
      <Counter1 />
      <Counter2 />
      <Counter2 />
      <Counter3 />
      <Counter4 />
    </CounterStore.Provider>
    <h4>Duplication</h4>
    <CounterStore.Provider>
      <Counter1 />
      <Counter1 />
      <Counter2 />
      <Counter2 />
      <Counter3 />
      <Counter4 />
    </CounterStore.Provider>
  </div>
);

export default StoreWithSelectorWithSyncExternalStoreContext;
