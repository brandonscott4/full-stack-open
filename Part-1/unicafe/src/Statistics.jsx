const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good + bad * -1) / total;
  const positive = (good / (good + neutral + bad)) * 100;

  return (
    <>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </>
  );
};

export default Statistics;
