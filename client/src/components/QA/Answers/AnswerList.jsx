import React from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

const AnswerList = ({ answers }) => {
  return (
    <div>
      { answers.map(answer => (
        <AnswerListEntry key={ answer.answer_id } answer={ answer }/>
      ))}
    </div>
  );
};

export default AnswerList;