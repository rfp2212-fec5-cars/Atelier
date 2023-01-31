import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionList from './Questions/QuestionList.jsx';
import MoreQuestions from './Questions/MoreQuestions.jsx';
import AddQuestion from './Questions/AddQuestion.jsx';

const QA = ({ productId }) => {
  const [questionList, setQuestionList] = useState([]);
  const [displayedQuestions, setDisplayedQuestions] = useState([])

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
        var sortedQuestions = data.results.sort((a, b) => {
          return b.question_helpfulness - a.question_helpfulness;
        });

        setQuestionList(sortedQuestions);
        setDisplayedQuestions(sortedQuestions.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);

  return (
    <div>
      <h1>Questions & Answers</h1>
      <Search />
      <QuestionList questionList={ displayedQuestions }/>
      <MoreQuestions questionList={ questionList } setDisplayedQuestions={ setDisplayedQuestions } />
      <AddQuestion product_id={ productId }/>
    </div>
  )
};

export default QA;