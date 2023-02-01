import React, { useState } from 'react';

const MoreAnswers = ({ answerList, displayedAnswers, setDisplayedAnswers }) => {
  const [answerCount, setAnswerCount] = useState(2);

  const handleMoreAnswers = (e) => {
    e.preventDefault();

    if (JSON.stringify(displayedAnswers) === JSON.stringify(answerList)) {
      setDisplayedAnswers(answerList.slice(0, 2));
      setAnswerCount(2);
    } else {
      setDisplayedAnswers(answerList.slice(0, answerCount + 2));
      setAnswerCount(answerCount + 2);
    }
  }

  const buttonName = () => {
    return answerList.length > displayedAnswers.length ? 'See More Answers' : 'Collapse Answers';
  }

  return (
    <div>
      { answerList.length === 0 ? 'Question has not been answered yet' : null }
      { answerList.length > 2
        ? <input type='button' onClick={(e) => handleMoreAnswers(e)} value={ buttonName() } />
        : null
      }
    </div>
  )
};

export default MoreAnswers;