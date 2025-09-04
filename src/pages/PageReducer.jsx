import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action) {
    case "ingrement":
      return state + 1;
    case "decrement":
      return state - 1;
    case "increment_+5":
      return state + 5;
    case "reset":
      return 0;
    default:
      return state;
  }
};
export default function PageReducer() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "auto",
          width: "300px",
          backgroundColor: "#ffffff",
          padding: "50px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          Counter(Current Reducer:{state})
        </h1>
        <p
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginTop: "30px",
          }}
        >
          {state.value}
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <button className="button" onClick={() => dispatch("ingrement")}>
            +
          </button>
          <button
            className="button"
            disabled={state.value <= 0}
            onClick={() => dispatch("decrement")}
          >
            -
          </button>
          <button
            className="button"
            onClick={() => dispatch("increment_+5")}
          >
            +5
          </button>
        </div>
        {state.value != 0 && (
          <button
            style={{
              marginTop: "30px",
              backgroundColor: "white",
              color: "black",
              border: "2px solid #0d0e0eff",
            }}
            onClick={() => dispatch("reset")}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
