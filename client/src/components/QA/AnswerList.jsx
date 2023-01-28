import React from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

const AnswerList = ({ answers }) => {
  return (
    <div>
      <h2>Answer List</h2>
      { answers.map(answer => (
        <AnswerListEntry key={ answer.answer_id } answer={ answer }/>
      ))}
      <button type='submit'>See More Answers</button>
    </div>
  );
};

export default AnswerList;