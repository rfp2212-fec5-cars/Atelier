import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';

const QA = ({ productId }) => {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    var options = {
      url: '/qa/questions',
      params: {
        product_id: productId,
        page: 1,
        count: 100
      }
    };

    axios(options)
      .then(({ data }) => {
        setQuestionList(data.results);
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);

  return (
    <div>
      <h1>Questions & Answers</h1>
      <Search />
      <QuestionList questionList={ questionList }/>
      <AddQuestion />
    </div>
  )
};

export default QA;