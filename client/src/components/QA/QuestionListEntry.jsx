import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';

const QuestionListEntry = ({ question }) => {
  const [answerList, setAnswerList] = useState([]);
  const [displayedAnswers, setDisplayedAnswers] = useState([]);
  const [answerCount, setAnswerCount] = useState(2);

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
      })
      .catch((err) => {
        console.log('Failed to get answer list', err);
      })
  }, [])

  return (
    <div>
      <h4>Q: { question.question_body }</h4 >
      <div>
        <label>Helpful? </label>
        <button type='submit'>Yes</button>
        { question.question_helpfulness }
        <AddAnswer />
      </div>
      <AnswerList answers={ answerList }/>
      <hr></hr>
    </div>
  );
};

export default QuestionListEntry;