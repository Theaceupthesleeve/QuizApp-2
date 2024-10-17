import React from 'react';

const Question = ({ data, onAnswer, questionNumber, totalQuestions }) => {
  return (
    <div className="question-card">
      <h2>
        Question {questionNumber} / {totalQuestions}
      </h2>
      <p>{data.question}</p>
      <div className="options">
        {data.options.map((option) => (
          <button key={option} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;