import React, { useState } from 'react';

const MoreQuestions = ({ setDisplayedQuestions, displayedQuestions, questionList }) => {

  const handleMoreQuestions = (e) => {
    e.preventDefault();

    if (JSON.stringify(displayedQuestions) === JSON.stringify(questionList)) {
      setDisplayedQuestions(questionList.slice(0, 4));
    } else {
      setDisplayedQuestions(questionList);
    }
  }

  const buttonName = () => {
    return questionList.length > displayedQuestions.length ? 'More Answered Questions' : 'Collapse Questions';
  }

  return (
    <div>
      { questionList.length >= 4 ? <input type='button' onClick={e => handleMoreQuestions(e)} value={ buttonName() } /> : null }
    </div>
  )
}

export default MoreQuestions;