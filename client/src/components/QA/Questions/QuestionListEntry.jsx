import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerList from '../Answers/AnswerList.jsx';
import MoreAnswers from '../Answers/MoreAnswers.jsx';
import AddAnswer from '../Answers/AddAnswer.jsx';

const QuestionListEntry = ({ question, product_name }) => {
  // setting up states for the question details
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const [yesCount, setYesCount] = useState(question.question_helpfulness);
  const [alreadyReported, setAlreadyReported] = useState(false);

  // setting up states for the answer lists
  const [answerList, setAnswerList] = useState([]);
  const [displayedAnswers, setDisplayedAnswers] = useState([]);
  const [updateAnswers, setUpdateAnswers] = useState(false);

  // getting the answer list
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
  }, [updateAnswers]);

  // liking a question
  const handleLike = (e) => {
    e.preventDefault();

    var options = {
      url: `/qa/questions/${question.question_id}/helpful`,
      method: 'PUT'
    }

    axios(options)
      .then(() => {
        setAlreadyLiked(true);
        setYesCount(yesCount + 1);
      })
      .catch((err) => {
        console.log('Failed to like question', err);
      })
  }

  // reporting a question
  const handleReport = (e) => {
    e.preventDefault();

    var options = {
      url: `/qa/questions/${question.question_id}/report`,
      method: 'PUT'
    }

    axios(options)
      .then(() => setAlreadyReported(true))
      .catch((err) => {
        console.log('Failed to report question', err);
      })
  }

  return (
    <div className='questionListEntry'>
      <h4>Q: { question.question_body }</h4 >
      <div>
        <label>Helpful? </label>
        { alreadyLiked
          ? `Yes (${yesCount})`
          : <input type='button' onClick={e => handleLike(e)} value={`Yes (${yesCount})`}/>
        }
        { alreadyReported
          ? 'Reported'
          : <input type='button' onClick={e => handleReport(e)} value='Report' />
        }
        <AddAnswer product_name={ product_name } question={ question } updateAnswers={ updateAnswers } setUpdateAnswers={ setUpdateAnswers }/>
      </div>
      <AnswerList answers={ displayedAnswers } />
      <MoreAnswers answerList={ answerList } displayedAnswers={ displayedAnswers } setDisplayedAnswers={ setDisplayedAnswers }/>
      <hr></hr>
    </div>
  );
};

export default QuestionListEntry;