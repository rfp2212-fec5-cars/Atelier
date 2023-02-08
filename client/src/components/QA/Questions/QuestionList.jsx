import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';

const QuestionList = ({ displayedQuestions, product_name }) => {

  return (
    <div className='questionList'>
      { displayedQuestions.map((question, index) => (
        <QuestionListEntry
          key={ question.question_id }
          question={ question }
          product_name={ product_name }
          index={ index + 1 }
        />
      ))}
    </div>
  )
};

export default QuestionList;