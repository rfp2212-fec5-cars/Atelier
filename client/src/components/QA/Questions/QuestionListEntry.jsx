import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerList from '../Answers/AnswerList.jsx';
import MoreAnswers from '../Answers/MoreAnswers.jsx';
import AddAnswer from '../Answers/AddAnswer.jsx';

const QuestionListEntry = ({ question, product_name, index, logInteraction }) => {
  // setting up states for the question details
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const [yesCount, setYesCount] = useState(question.question_helpfulness);
  const [alreadyReported, setAlreadyReported] = useState(false);

  // setting up states for the answer lists
  const [loadedAnswers, setLoadedAnswers] = useState(false);
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

        setLoadedAnswers(true);
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
    logInteraction({
      element: 'Like Question',
      widget: 'Q&A'
    });

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
    logInteraction({
      element: 'Report Question',
      widget: 'Q&A'
    });

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
      <div className='questionLine'>
        <h4
          className='question'
          role={`question-${ index }`}
        >
          <span className='headingUnderline'>Q:</span> { question.question_body }
        </h4 >
        <div className='options'>
          <p>Helpful? </p>
          { alreadyLiked
            ? <p>{ `Yes (${yesCount}) ` }</p>
            : <p onClick={e => handleLike(e)}><span className='statusLink'>Yes</span>{` (${yesCount})` }</p>
          }
          { alreadyReported
            ? <p>Reported</p>
            : <p onClick={e => handleReport(e)} className='statusLink'>Report</p>
          }
          <p> | </p>
          <AddAnswer product_name={ product_name } question={ question } updateAnswers={ updateAnswers } setUpdateAnswers={ setUpdateAnswers }/>
        </div>
      </div>
      { loadedAnswers ? null : <p data-testid='loading-answers'>Loading Answers...</p>}
      <AnswerList answers={ displayedAnswers } />
      <MoreAnswers answerList={ answerList } displayedAnswers={ displayedAnswers } setDisplayedAnswers={ setDisplayedAnswers }/>
    </div>
  );
};

export default QuestionListEntry;