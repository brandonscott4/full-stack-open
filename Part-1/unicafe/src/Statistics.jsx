import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good + bad * -1) / total;
  const positive = (good / (good + neutral + bad)) * 100;

  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good}></StatisticLine>
          <StatisticLine text={"neutral"} value={neutral}></StatisticLine>
          <StatisticLine text={"bad"} value={bad}></StatisticLine>
          <StatisticLine text={"all"} value={total}></StatisticLine>
          <StatisticLine text={"average"} value={average}></StatisticLine>
          <StatisticLine text={"positive"} value={positive}></StatisticLine>
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
