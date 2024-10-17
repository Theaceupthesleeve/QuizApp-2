import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result">
      <h2>Your Score</h2>
      <p>
        {score} out of {totalQuestions}
      </p>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
};

export default Result;