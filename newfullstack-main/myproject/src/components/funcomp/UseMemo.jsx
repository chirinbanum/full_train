import React, { useState, useMemo } from "react";
const slowFunction = (number) => {
  console.log("Calling slow function...");
  for (let i = 0; i < 1000000000; i++) {} 
  return number * 2;
};

const UseMemo = () => {
  const [num, setNum] = useState(0);
  const [theme, updateTheme] = useState(true);

  const darkLight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  const doubleLingANumber = useMemo(() => slowFunction(Number(num)), [num]);
  return (
    <section style={darkLight}>
      <h1>This is useMemo</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => updateTheme((prevTheme) => !prevTheme)}>
        Toggle Theme
      </button>
      <h2 style={darkLight}>Hello</h2>
      <p>Doubled Value: {doubleLingANumber}</p>
    </section>
  );
};

export default UseMemo;
