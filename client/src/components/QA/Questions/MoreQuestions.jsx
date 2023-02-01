import React, { useState } from 'react';

const MoreQuestions = ({ setDisplayedQuestions, displayedQuestions, questionList }) => {
  const [questionCount, setQuestionCount] = useState(2);

  const handleMoreQuestions = (e) => {
    e.preventDefault();

    setDisplayedQuestions(questionList.slice(0, questionCount + 2));
    setQuestionCount(questionCount + 2);
  }

  const moreButton = (
    <input type='button' onClick={e => handleMoreQuestions(e)} value='See More Questions' />
  );

  return (
    <div>
      { questionList.length >= 4 && questionCount < questionList.length
          ? moreButton
          : null
      }
      {/* { (questionList.length >= 4 && questionCount < questionList.length)
        ? { moreButton }
        : null
      } */}
    </div>
  )
}

export default MoreQuestions;

// <input type='button' onClick={e => handleMoreQuestions(e)} value={ buttonName() } />