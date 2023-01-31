import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionList from './Questions/QuestionList.jsx';
import MoreQuestions from './Questions/MoreQuestions.jsx';
import AddQuestion from './Questions/AddQuestion.jsx';

const QA = ({ productId }) => {
  const [questionList, setQuestionList] = useState([]);
  const [displayedQuestions, setDisplayedQuestions] = useState([]);
  const [updateQuestions, setUpdateQuestions] = useState(false);

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

  }, [updateQuestions]);

  return (
    <div>
      <h1>Questions & Answers</h1>
      <Search />
      <QuestionList questionList={ displayedQuestions } product_id={ productId }/>
      <MoreQuestions questionList={ questionList } setDisplayedQuestions={ setDisplayedQuestions } displayedQuestions={ displayedQuestions }/>
      <AddQuestion product_id={ productId } updateQuestions={ updateQuestions } setUpdateQuestions={ setUpdateQuestions }/>
    </div>
  )
};

export default QA;