import React from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

const AnswerList = ({ answers }) => {
  return (
    <div className='answerList'>
      { answers.map((answer, index) => (
        <AnswerListEntry key={ answer.answer_id } answer={ answer } index={ index + 1 }/>
      ))}
    </div>
  );
};

export default AnswerList;