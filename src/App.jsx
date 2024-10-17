import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';

const App = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.results.map((question) => ({
          question: question.question,
          options: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
          answer: question.correct_answer,
        }));
        setQuizData(formattedData);
        setLoading(false);
      });
  }, []);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {isFinished ? (
        <Result score={score} totalQuestions={quizData.length} />
      ) : (
        <Question
          data={quizData[currentQuestion]}
          onAnswer={handleAnswer}
          questionNumber={currentQuestion + 1}
          totalQuestions={quizData.length}
        />
      )}
    </div>
  );
};

export default App;