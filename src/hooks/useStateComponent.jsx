import { useState } from "react";

export default function useStateComponent() {
  const [state, setState] = useState({ value: 0 });
  const handleCount = (type) => {
    setState((draft) => {
      const updateValue =
        type === "increment_+5"
          ? draft.value + 5
          : type === "reset"
          ? 0
          : type === "increment"
          ? draft.value++
          : draft.value--;

      return {
        ...draft,
        value: updateValue,
      };
    });
  };
  return {state, handleCount};
}
