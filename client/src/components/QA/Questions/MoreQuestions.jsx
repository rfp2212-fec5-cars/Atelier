import React, { useState } from 'react';

const MoreQuestions = ({ setDisplayedQuestions, displayedQuestions, filteredQuestions }) => {
  const [questionCount, setQuestionCount] = useState(4);

  const handleMoreQuestions = (e) => {
    e.preventDefault();
    setDisplayedQuestions(filteredQuestions.slice(0, questionCount + 2));
    setQuestionCount(questionCount + 2);
  }

  return (
    <div>
      { filteredQuestions.length >= 4 && questionCount < filteredQuestions.length
          ? <input type='button' onClick={e => handleMoreQuestions(e)} value='See More Questions' />
          : null
      }
    </div>
  )
}

export default MoreQuestions;
