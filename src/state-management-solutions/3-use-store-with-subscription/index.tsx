import Counter1 from "./Components/Counter";
import Counter2 from "./Components/Counter2";

const StoreWithSubscription = () => (
  <div style={{ border: "1px solid red", margin: "10px", padding: "10px" }}>
    <h1>Store with subscription</h1>
    <Counter1 />
    <Counter2 />
  </div>
);

export default StoreWithSubscription;
