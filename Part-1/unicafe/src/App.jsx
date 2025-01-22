import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

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
      <Button
        handleClick={() => handleClick(good, setGood)}
        text={"good"}
      ></Button>
      <Button
        handleClick={() => handleClick(neutral, setNeutral)}
        text={"neutral"}
      ></Button>
      <Button
        handleClick={() => handleClick(bad, setBad)}
        text={"bad"}
      ></Button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
