import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';

const QuestionList = ({ questionList, product_name }) => {
  return (
    <div>
      { questionList.map((question) => (
        <QuestionListEntry
          key={ question.question_id }
          question={ question }
          product_name={ product_name }
        />
      ))}
    </div>
  )
};

export default QuestionList;