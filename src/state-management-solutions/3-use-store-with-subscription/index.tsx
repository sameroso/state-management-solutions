import Counter1 from "./Components/Counter";
import Counter2 from "./Components/Counter2";
import Counter3 from "./Components/Counter3";
import Counter4 from "./Components/Counter4";

const StoreWithSubscription = () => (
  <div style={{ border: "1px solid red", margin: "10px", padding: "10px" }}>
    <h1>Store with subscription</h1>
    <h4>Using count</h4>
    <Counter1 />
    <Counter2 />
    <h4>Using count2</h4>
    <Counter3 />
    <Counter4 />
  </div>
);

export default StoreWithSubscription;
