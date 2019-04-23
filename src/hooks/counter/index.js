import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";

function renderCounter(count, setCount, animatedCount) {
  const counter = animatedCount.number;
  console.log(counter);
  return (
    <>
      <h1>
        You clicked <animated.span className="counter">{counter}</animated.span>{" "}
        times!
      </h1>
      <div className="btn-container">
        <button className="btn-counter" onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <button
          className="btn-clear"
          disabled={!count}
          onClick={() => setCount(0)}
        >
          Clear
        </button>
      </div>
    </>
  );
}
export default function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${counter} times!`;
  }, [counter]);
  const animatedCount = useSpring({
    to: { number: counter },
    from: { number: 0 }
  });
  return renderCounter(counter, setCounter, animatedCount);
}
