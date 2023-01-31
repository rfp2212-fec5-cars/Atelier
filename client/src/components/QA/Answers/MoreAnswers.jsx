import React, { useState } from 'react';

const MoreAnswers = ({ answerList, displayedAnswers, setDisplayedAnswers }) => {
  const [answerCount, setAnswerCount] = useState(2);
  const [buttonName, setButtonName] = useState('See More Answers');

  const handleMoreAnswers = (e) => {
    e.preventDefault();

    if (buttonName === 'Collapse Answers') {
      setButtonName('See More Answers');
      setDisplayedAnswers(answerList.slice(0, 2));
      setAnswerCount(2);
      return;
    }

    setDisplayedAnswers(answerList.slice(0, answerCount + 2));
    setAnswerCount(answerCount + 2);

    if (answerCount + 2 >= answerList.length) {
      setButtonName('Collapse Answers');
    }
  }

  return (
    <div>
      { answerList.length === 0 ? 'Question has not been answered yet' : null }
      { answerList.length > 2
        ? <input type='button' onClick={(e) => handleMoreAnswers(e)} value={ buttonName } />
        : null
      }
    </div>
  )
};

export default MoreAnswers;