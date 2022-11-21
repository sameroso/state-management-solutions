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

export default reducer;
