import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionList from './Questions/QuestionList.jsx';
import MoreQuestions from './Questions/MoreQuestions.jsx';
import AddQuestion from './Questions/AddQuestion.jsx';

const QA = ({ product_id, product_name, logInteraction }) => {
  // create state for loading
  const [loaded, setLoaded] = useState(false);

  // different types of questions
  const [allQuestions, setAllQuestions] = useState([]);
  const [displayedQuestions, setDisplayedQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  // states to update question lists
  const [updateQuestions, setUpdateQuestions] = useState(false);
  const [search, setSearch] = useState('');

  // getting all the questions on reload
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

        setLoaded(true);
        setAllQuestions(sortedQuestions);
        setFilteredQuestions(sortedQuestions);
        setDisplayedQuestions(sortedQuestions.slice(0, 4));
        setSearch('');
      })
      .catch((err) => {
        console.log(err);
      })

  }, [updateQuestions]);

  // filter the question list if search term is updated
  useEffect(() => {
    var searched = allQuestions.filter(question => question.question_body.toUpperCase().includes(search.toUpperCase()));
    setFilteredQuestions(searched);
    setDisplayedQuestions(searched);
  }, [search]);

  return (
    <div className='QA'>
      <h2><span className='headingUnderline'>Questions</span> & Answers</h2>
      <div className='QA-top-bar'>
        <Search
          setSearch={ setSearch }
          logInteraction={ logInteraction }
        />
        <p className='disclaimer'>Displaying { displayedQuestions.length } out of { filteredQuestions.length } questions</p>
        {
          search !== '' ? <p className='disclaimer'> |</p> : null
        }
        {
          search !== '' ? <p className='disclaimer'>Searching for "{ search }"</p> : null
        }
      </div>
      {
        loaded ? null : <p data-testid='loading'>Loading...</p>
      }
      { displayedQuestions.length > 0
        ? <QuestionList displayedQuestions={ displayedQuestions } product_name={ product_name } logInteraction={ logInteraction }/>
        : null
      }
      <div className='questionButtons'>
        <AddQuestion
          product_id={ product_id }
          product_name={ product_name }
          updateQuestions={ updateQuestions }
          setUpdateQuestions={ setUpdateQuestions }
          logInteraction={ logInteraction }
        />
        <MoreQuestions
          filteredQuestions={ filteredQuestions }
          setDisplayedQuestions={ setDisplayedQuestions }
          displayedQuestions={ displayedQuestions }
          logInteraction={ logInteraction }
        />
      </div>
    </div>
  )
};

export default QA;