import Button1 from "./Components/Button1";
import Button2 from "./Components/Button2";

const ComponentPubSub = () => {
  return (
    <div style={{ border: "1px solid red", margin: "10px", padding: "10px" }}>
      <h1>Publisher Subscriber</h1>
      <Button1 />
      <Button2 />
      <div>Rerender</div>
    </div>
  );
};

export default ComponentPubSub;
