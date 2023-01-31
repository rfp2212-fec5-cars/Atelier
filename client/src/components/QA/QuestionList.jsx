import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';

const QuestionList = ({ questionList }) => {
  return (
    <div>
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