// src/components/Questionnaire.js
import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Question from './Question';

// Sample Questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: 2 // Index of the correct answer
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Mark Twain", "William Shakespeare", "Charles Dickens", "Leo Tolstoy"],
    answer: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: 3
  },
  {
    question: "What is the boiling point of water?",
    options: ["50°C", "75°C", "100°C", "125°C"],
    answer: 2
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    answer: 1
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 2
  },
  {
    question: "What is the currency of the United Kingdom?",
    options: ["Dollar", "Pound", "Euro", "Yen"],
    answer: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: 2
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: 2
  }
];

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timer, setTimer] = useState(60);
  const [buttonText, setButtonText] = useState("Submit");

  useEffect(() => {
    // Start the timer
    if (timer > 0 && !isAnswered) {
      const timerId = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(timerId);
    } else if (timer === 0) {
      alert("Time's up! Reload the page to try again.");
    }
  }, [timer, isAnswered]);

  const handleOptionClick = (index) => {
    if (!isAnswered) {
      setSelectedOption(index);
    }
  };

  const handleSubmit = () => {
    setIsAnswered(true);
    setButtonText("Next");
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimer(60); // Reset timer for next question
      setButtonText("Submit");
    } else {
      alert("You've completed the questionnaire!");
    }
  };

  return (
    <div className="app">
      <h1>Questionnaire</h1>
      <Timer timeLeft={timer} onTimeout={() => alert("Time's up! Reload the page to try again.")} />
      <Question
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        isAnswered={isAnswered}
        selectedOption={selectedOption}
        correctAnswerIndex={questions[currentQuestionIndex].answer}
        onOptionClick={handleOptionClick}
      />
      <button onClick={isAnswered ? handleNext : handleSubmit}>
        {buttonText}
      </button>
    </div>
  );
};

export default Questionnaire;
