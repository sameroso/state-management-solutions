import { useReducer } from "react";

interface IState {
  count: number;
  text: string;
}

interface IActionIncrement {
  type: "INCREMENT";
  text?: never;
}

interface IActionSetText {
  type: "SET_TEXT";
  text: string;
}

type IAction = IActionIncrement | IActionSetText;

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "SET_TEXT":
      return { ...state, text: action.text };
    default:
      throw new Error("unknown action type");
  }
};

export default function ComponentUseReducerSolution() {
  const [state, dispatch] = useReducer(reducer, { count: 0, text: "hi" });
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
