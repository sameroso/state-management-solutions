import Counter1 from "./Components/Counter1";
import Counter2 from "./Components/Counter2";
import Counter3 from "./Components/Counter3";
import Counter4 from "./Components/Counter4";

const StoreWithSelectorWithSyncExternalStore = () => (
  <div style={{ border: "1px solid red", margin: "10px", padding: "10px" }}>
    <h1>Store with subscription and selector with useSyncExternalStore</h1>
    <Counter1 />
    <Counter1 />
    <Counter2 />
    <Counter2 />
    <Counter3 />
    <Counter4 />
  </div>
);

export default StoreWithSelectorWithSyncExternalStore;
