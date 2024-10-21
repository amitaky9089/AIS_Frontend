import React from 'react';
import Option from './Option';

const Question = ({ question, options, isAnswered, selectedOption, correctAnswerIndex, onOptionClick }) => {
  return (
    <div>
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <Option
            key={index}
            index={index}
            option={option}
            isAnswered={isAnswered}
            isCorrect={index === correctAnswerIndex}
            isSelected={index === selectedOption} // This will highlight the selected option
            onClick={onOptionClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
