import useCount from "../useCount";

const Button1 = () => {
  const [count, publish] = useCount();

  return (
    <div>
      {count} <button onClick={() => publish(count + 1)}>+1</button>
    </div>
  );
};

export default Button1;
