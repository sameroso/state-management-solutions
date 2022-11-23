const createPubSub = () => {
  const count = 0;
  const fns: ((count: number) => void)[] = [];

  const subscribe: (fn: (count: number) => void) => () => void = (fn) => {
    fns.push(fn);

    return () => fns.filter((funcItem) => funcItem !== fn);
  };

  const publish = (count: number) => fns.forEach((fn) => fn(count));

  return { count, publish, subscribe };
};

export default createPubSub;
