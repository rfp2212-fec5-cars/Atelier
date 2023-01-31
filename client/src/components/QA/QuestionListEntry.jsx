import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';

const QuestionListEntry = ({ question }) => {
  const [answerList, setAnswerList] = useState([]);

  useEffect(() => {
    var options = {
      url: `/qa/questions/${question.question_id}/answers`,
      params: {
        page: 1,
        count: 100
      }
    }
    axios(options)
      .then(({ data }) => setAnswerList(data.results))
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
        <div>
          <AddAnswer />
        </div>
      </div>
      <AnswerList answers={ answerList }/>
      <hr></hr>
    </div>
  );
};

export default QuestionListEntry;