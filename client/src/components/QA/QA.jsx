import React from 'react';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';

const QA = () => {
  return (
    <div>
      <h1>Questions & Answers</h1>
      <Search />
      <QuestionList />
      <AddQuestion />
    </div>
  )
};

export default QA;