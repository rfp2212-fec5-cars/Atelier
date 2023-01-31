import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';

const QuestionList = ({ questionList, product_id }) => {
  return (
    <div>
      { questionList.map((question) => (
        <QuestionListEntry
          key={ question.question_id }
          question={ question }
          product_id={ product_id }
        />
      ))}
    </div>
  )
};

export default QuestionList;