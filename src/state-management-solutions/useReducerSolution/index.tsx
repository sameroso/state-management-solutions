import useReducerHook from "./useReducerHook";

export default function ComponentUseReducerSolution() {
  const [state, dispatch] = useReducerHook();
  return (
    <div style={{ border: "1px solid red", margin: "10px", padding: "10px" }}>
      <h1>useReducer solution</h1>
      <p>count:{state.count}</p>
      <p>text:{state.text}</p>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment count
        </button>
      </div>
      <div>
        <label htmlFor="change_text_input">Change text</label>
        <input
          id="change_text_input"
          value={state.text}
          onChange={(e) => dispatch({ type: "SET_TEXT", text: e.target.value })}
        />
      </div>
    </div>
  );
}
