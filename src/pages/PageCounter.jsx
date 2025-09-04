import useStateComponent from "../hooks/useStateComponent";
import Counter from "../components/counter";
import { lazy, Suspense } from "react";
import { CounterProvider } from "../hooks/useContextComponent";

const CounterContext = lazy(() => import("../components/ContextCounter"));

export default function PageCounter() {
  const { state, handleCount } = useStateComponent();

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
      <CounterProvider>
        <Counter state={state} handleCount={handleCount} />
        <Suspense fallback={<div>Loading...</div>}>
          <CounterContext />
        </Suspense>
      </CounterProvider>
    </div>
  );
}
