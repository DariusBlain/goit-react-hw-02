import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import "./App.css";

function App() {
  const [values, setValues] = useState(() => {
    const savedValuesOptions = window.localStorage.getItem("Values-options");

    if (savedValuesOptions !== null) {
      return JSON.parse(savedValuesOptions);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const { good, neutral, bad } = values;

  useEffect(() => {
    window.localStorage.setItem("Values-options", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          values={values}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      )}
    </>
  );
}

export default App;
