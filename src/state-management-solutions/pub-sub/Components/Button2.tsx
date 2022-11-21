import { useEffect, useState } from "react";
import pubsub from "../pubsub";

const { count, publish, subscribe } = pubsub;

const Button2 = () => {
  const [counter, setCounter] = useState(count);
  useEffect(() => {
    const unsubscribe = subscribe(setCounter);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {counter} <button onClick={() => publish(counter + 2)}>+2</button>
    </div>
  );
};

export default Button2;
