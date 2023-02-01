import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionList from './Questions/QuestionList.jsx';
import MoreQuestions from './Questions/MoreQuestions.jsx';
import AddQuestion from './Questions/AddQuestion.jsx';

const QA = ({ product_id, product_name }) => {
  const [questionList, setQuestionList] = useState([]);
  const [displayedQuestions, setDisplayedQuestions] = useState([]);
  const [updateQuestions, setUpdateQuestions] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    var options = {
      url: '/qa/questions',
      params: {
        product_id: product_id,
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

  useEffect(() => {
    console.log('searching', search);
    const filteredList = questionList
  }, [search])

  // useEffect(() => {
  //   const filteredList = questionList.filter(question => {
  //     return question.question_body.toUpperCase().includes(search.toUpperCase())
  //   });
  //   console.log(filteredList)
  //   setDisplayedQuestions(filteredList);
  // }, [search])


  return (
    <div>
      <h1>Questions & Answers</h1>
      <Search
        setSearch={ setSearch }
      />
      <QuestionList
        questionList={ displayedQuestions }
        product_name={ product_name }
      />
      <MoreQuestions
        questionList={ questionList }
        setDisplayedQuestions={ setDisplayedQuestions }
        displayedQuestions={ displayedQuestions }
      />
      <AddQuestion
        product_id={ product_id }
        product_name={ product_name }
        updateQuestions={ updateQuestions }
        setUpdateQuestions={ setUpdateQuestions }
      />
    </div>
  )
};

export default QA;