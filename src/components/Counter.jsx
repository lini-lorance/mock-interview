/* 
1.white background login card
2.title -center align "Counter"
3.display counter value - center <align-36px>
4.three buttons - center aligned
   a. increment +1  b. decrement -1  c.reset 0
5.buttons should have some padding and margin
6. value===0 disable decrement button should be disabled
*/

import { useCounterContext } from "../hooks/useContextComponent";

export default function Counter({state,handleCount}) {
  const {count}=useCounterContext();
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
          Counter(Current context:{count})
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
          <button className="button" onClick={() => handleCount("increment")}>
            +
          </button>
          <button
            className="button"
            disabled={state.value <= 0}
            onClick={() => handleCount("decrement")}
          >
            -
          </button>
          <button
            className="button"
            onClick={() => handleCount("increment_+5")}
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
            onClick={() => handleCount("reset")}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
