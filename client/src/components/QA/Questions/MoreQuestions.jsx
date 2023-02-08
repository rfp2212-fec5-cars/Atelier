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
          ? <p role='more-questions' className='statusLink' onClick={e => handleMoreQuestions(e)}>See More Questions {`(${filteredQuestions.length - questionCount})`}</p>
          : null
      }
    </div>
  )
}

export default MoreQuestions;
