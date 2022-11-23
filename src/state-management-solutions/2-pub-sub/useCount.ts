import { useEffect, useState } from "react";
import pubsub from "./pubsub";
const { count, publish, subscribe } = pubsub;

const useCount = () => {
  const [state, setState] = useState(count);
  useEffect(() => {
    const unsubscribe = subscribe(setState);
    return () => {
      unsubscribe();
    };
  }, []);
  return [state, publish] as const;
};

export default useCount;
