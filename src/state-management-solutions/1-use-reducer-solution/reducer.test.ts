import reducer from "./reducer";

describe("testing useReducer", () => {
  it("should return changed text", () => {
    const newState = reducer(
      { count: 0, text: "" },
      { type: "SET_TEXT", text: "Hello" }
    );

    expect(newState.count).toBe(0);
    expect(newState.text).toBe("Hello");
  });
  it("should return count +1", () => {
    const newState = reducer({ count: 0, text: "" }, { type: "INCREMENT" });

    expect(newState.count).toBe(1);
    expect(newState.text).toBe("");
  });
});
