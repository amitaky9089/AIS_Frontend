import React from 'react';

const Option = ({ index, option, isAnswered, isCorrect, isSelected, onClick }) => {
  let optionClass = "option";
  if (isAnswered) {
    if (isCorrect) {
      optionClass += " correct"; // Correct answer
    } else if (isSelected) {
      optionClass += " incorrect"; // Selected wrong answer
    }
  } else if (isSelected) {
    optionClass += " selected"; // Highlight selected option
  }

  return (
    <div className={optionClass} onClick={() => onClick(index)}>
      {option}
    </div>
  );
};

export default Option;
