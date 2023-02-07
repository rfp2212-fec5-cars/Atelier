import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';

const QuestionList = ({ displayedQuestions, product_name }) => {

  return (
    <div role='questionList' className='questionList'>
      { displayedQuestions.map((question) => (
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