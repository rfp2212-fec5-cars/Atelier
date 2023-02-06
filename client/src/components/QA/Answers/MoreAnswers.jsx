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
    return answerList.length > displayedAnswers.length ? `See More Answers (${answerList.length - displayedAnswers.length})` : 'Collapse Answers';
  }

  return (
    <div className='answerListEntry'>
      { answerList.length === 0 ? <span className='answerListEntry'>Question has not been answered yet</span> : null }
      { answerList.length > 2
        ? <p className='statusLink' onClick={(e) => handleMoreAnswers(e)}>{ buttonName() }</p>
        : null
      }
    </div>
  )
};

export default MoreAnswers;