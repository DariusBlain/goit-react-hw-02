const Feedback = ({
  values: { good, neutral, bad },
  positiveFeedback,
  totalFeedback,
}) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </>
  );
};

export default Feedback;
