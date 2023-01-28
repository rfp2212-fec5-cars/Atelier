import React from 'react';

const QuestionList = ({ questionList }) => {
  return (
    <div>
      <h2>Q: </h2>
      { questionList.map((question) => (
        <li>{ question.question_body} </li>
      ))}
    </div>
  )
};

export default QuestionList;