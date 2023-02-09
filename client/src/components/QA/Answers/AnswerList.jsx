import React from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

const AnswerList = ({ answers, logInteraction }) => {
  return (
    <div className='answerList'>
      { answers.map((answer, index) => (
        <AnswerListEntry key={ answer.answer_id } answer={ answer } index={ index + 1 } logInteraction={ logInteraction }/>
      ))}
    </div>
  );
};

export default AnswerList;