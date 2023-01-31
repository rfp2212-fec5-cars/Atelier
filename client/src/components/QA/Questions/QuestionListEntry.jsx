import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerList from '../Answers/AnswerList.jsx';
import MoreAnswers from '../Answers/MoreAnswers.jsx';
import AddAnswer from '../Answers/AddAnswer.jsx';

const QuestionListEntry = ({ question }) => {
  const [answerList, setAnswerList] = useState([]);
  const [displayedAnswers, setDisplayedAnswers] = useState([]);

  useEffect(() => {
    var options = {
      url: `/qa/questions/${question.question_id}/answers`,
      params: {
        page: 1,
        count: 100
      }
    }
    axios(options)
      .then(({ data }) =>{
        var sortedAnswers = data.results.sort((a, b) => {
          return b.helpfulness - a.helpfulness;
        })

        setAnswerList(sortedAnswers);
        setDisplayedAnswers(sortedAnswers.slice(0, 2));
      })
      .catch((err) => {
        console.log('Failed to get answer list', err);
      })
  }, []);

  return (
    <div>
      <h4>Q: { question.question_body }</h4 >
      <div>
        <label>Helpful? </label>
        <button type='submit'>Yes</button>
        { question.question_helpfulness }
        <AddAnswer />
      </div>
      <AnswerList answers={ displayedAnswers }/>
      <MoreAnswers answerList={ answerList } displayedAnswers={ displayedAnswers } setDisplayedAnswers={ setDisplayedAnswers }/>
      <hr></hr>
    </div>
  );
};

export default QuestionListEntry;