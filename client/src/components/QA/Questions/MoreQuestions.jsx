import React, { useState } from 'react';

const MoreQuestions = ({ setDisplayedQuestions, questionList }) => {
  const [buttonName, setButtonName ] = useState('More Answered Questions')

  const handleMoreQuestions = (e) => {
    e.preventDefault();

    if (buttonName === 'Collapse Questions') {
      setDisplayedQuestions(questionList.slice(0, 4));
      setButtonName('More Answered Questions')
    } else {
      setDisplayedQuestions(questionList);
      setButtonName('Collapse Questions');
    }
  }

  return (
    <div>
      { questionList.length >= 4 ? <input type='button' onClick={e => handleMoreQuestions(e)} value={ buttonName } /> : null }
    </div>
  )
}

export default MoreQuestions;