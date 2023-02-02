import React from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

const AnswerList = ({ answers }) => {
  return (
    <div className='answerList'>
      { answers.map(answer => (
        <AnswerListEntry key={ answer.answer_id } answer={ answer }/>
      ))}
    </div>
  );
};

export default AnswerList;