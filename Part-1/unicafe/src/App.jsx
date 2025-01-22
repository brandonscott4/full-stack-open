import { useState } from "react";
import Statistics from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (state, setStateFunction) => {
    setStateFunction(state + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleClick(good, setGood)}>good</button>
      <button onClick={() => handleClick(neutral, setNeutral)}>neutral</button>
      <button onClick={() => handleClick(bad, setBad)}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
