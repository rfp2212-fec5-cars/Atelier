import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';

const QA = () => {
  const exampleQuestionList = {
    product_id: 1,
    results: [
      {
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
          }
        }
      }
    ]
  };

  const [questionList, setQuestionList] = useState(exampleQuestionList);

  return (
    <div>
      <h1>Questions & Answers</h1>
      <Search />
      <QuestionList questionList={ questionList.results }/>
      <AddQuestion />
    </div>
  )
};

export default QA;