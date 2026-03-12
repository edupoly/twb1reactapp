import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);
  function incCount() {
    setCount(count + 1);
  }
  function decCount() {
    setCount(count - 1);
  }
  return [count, incCount, decCount];
}
