import React, { useState } from "react";
function QuizApp() {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [start, setStart] = useState(true);
  const questions = [
    {
      text: "Which among the following is correct about 4GL?",
      options: [
        { id: 0, text: "A computer brand", isCorrect: true },
        { id: 1, text: "A software brand", isCorrect: false },
        { id: 2, text: "A software program", isCorrect: false },
        { id: 3, text: "Programming Language", isCorrect: false },
      ],
    },
    {
      text: "which among the following is the command for “Undo”?",
      options: [
        { id: 0, text: "Ctrl +A", isCorrect: false },
        { id: 1, text: "Ctrl +Z", isCorrect: true },
        { id: 2, text: "Ctrl +C", isCorrect: false },
        { id: 3, text: "Ctrl +S", isCorrect: false },
      ],
    },
    {
      text: "What kind of operations can a computer carry out?",
      options: [
        { id: 0, text: "Arithmetic and Logical", isCorrect: true },
        { id: 1, text: "Verbal and Logical", isCorrect: false },
        { id: 2, text: "Logical and Cognitive", isCorrect: false },
        { id: 3, text: " Verbal and Arithmetic", isCorrect: false },
      ],
    },
    {
      text:
        "Which of the following are part of the Logical Operations of the computer?",
      options: [
        { id: 0, text: " Addition", isCorrect: false },
        { id: 1, text: "Greater Than", isCorrect: true },
        { id: 2, text: "Subtraction", isCorrect: false },
        { id: 3, text: "Division", isCorrect: false },
      ],
    },
    {
      text: "Which was the first desktop hybrid computing system?",
      options: [
        { id: 0, text: " Colossus", isCorrect: false },
        { id: 1, text: " Hycomp 250", isCorrect: true },
        { id: 2, text: "Zeta", isCorrect: false },
        { id: 3, text: "HYDAC 2400", isCorrect: false },
      ],
    },
  ];
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }  
    if (question + 1 < questions.length) {
      setQuestion(question + 1);
    } else {
      setResult(true);
      setStart(false);
    }
  };
  const restartGame = () => {
    setQuestion(0);
    setScore(0);
    setResult(false);
    setStart(true);
  };
  return (
    <div>
      <h1>Quiz App</h1>
      <div>
        {start && (
          <div>
            <h2>
              Question:{question + 1} out of {questions.length}
            </h2>
            {questions[question].text}
            <br />
            {questions[question].options.map((option) => {
              return (
                <div>
                  <input
                    value={option.text}
                    onClick={() => optionClicked(option.isCorrect)}
                    readOnly
                  ></input>
                </div>
              );
            })}
          </div>
        )}
        {result && (
          <div>
            <h2>Final Result</h2>
            <h3>Score: {score}</h3>
            <h3>
              {score} out of {questions.length} is correct
            </h3>
            <button onClick={restartGame}>Restart Game</button>
          </div>
        )}
      </div>
    </div>
  );
}
export default QuizApp;
