import React, { useState } from 'react';
import axios from 'axios';

const AnswerListEntry = ({ answer }) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const [yesCount, setYesCount] = useState(answer.helpfulness);

  // format the date
  var date = new Date(answer.date);
  date = date.toLocaleString('default', {month: 'long'}) + ' ' + date.getDate() + ', ' + date.getFullYear();

  const handleLike = (e) => {
    e.preventDefault();

    var options = {
      url: `/qa/answers/${answer.answer_id}/helpful`,
      method: 'PUT'
    }

    axios(options)
      .then(() => {
        setAlreadyLiked(true);
        setYesCount(yesCount + 1);
      })
      .catch((err) => {
        console.log('Failed to like answer', err);
      })
  }

  return (
    <div>
      <p><b>A: </b>{ answer.body }</p>
      <p>by { answer.answerer_name === 'Seller' ? <b>Seller</b> : answer.answerer_name }, { date }</p>
      <label>Helpful? </label>
      { alreadyLiked
        ? `Yes (${yesCount})`
        : <input type='button' onClick={e => handleLike(e)} value={`Yes (${yesCount})`}/>
      }
      <div>
        <button type='submit'>Report</button>
      </div>
    </div>
  )
};

export default AnswerListEntry;