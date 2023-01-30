import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';

const QuestionList = ({ questionList }) => {
  return (
    <div>
      <h2>Question List</h2>
      { questionList.map((question) => (
        <QuestionListEntry
          key={ question.question_id }
          question={ question }
        />
      ))}
      <button type='submit'>See More Questions</button>
    </div>
  )
};

export default QuestionList;