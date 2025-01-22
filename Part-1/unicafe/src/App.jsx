import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (good + bad * -1) / total;
  const positive = (good / (good + neutral + bad)) * 100;

  const handleClick = (state, setStateFunction) => {
    setStateFunction(state + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleClick(good, setGood)}>good</button>
      <button onClick={() => handleClick(neutral, setNeutral)}>neutral</button>
      <button onClick={() => handleClick(bad, setBad)}>bad</button>

      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  );
};

export default App;
