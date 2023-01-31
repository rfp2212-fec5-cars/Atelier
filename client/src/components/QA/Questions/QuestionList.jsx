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
    </div>
  )
};

export default QuestionList;