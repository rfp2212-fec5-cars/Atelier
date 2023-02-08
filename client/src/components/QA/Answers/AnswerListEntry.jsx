import React, { useState } from 'react';
import axios from 'axios';

const AnswerListEntry = ({ answer, index }) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const [yesCount, setYesCount] = useState(answer.helpfulness);
  const [alreadyReported, setAlreadyReported] = useState(false);

  // format the date
  var date = new Date(answer.date);
  date = date.toLocaleString('default', {month: 'long'}) + ' ' + date.getDate() + ', ' + date.getFullYear();

  // liking an answer increases its yes count
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

  // reporting an answer
  const handleReport = (e) => {
    e.preventDefault();

    var options = {
      url: `/qa/answers/${answer.answer_id}/report`,
      method: 'PUT'
    }

    axios(options)
      .then(() => setAlreadyReported(true))
      .catch((err) => {
        console.log('Failed to report answer', err);
      })
  }

  const AnswerPhotos = () => (
    <div className='answerPhotos'>
      { answer.photos.map(photo => <img key={ answer.answer_id + '.' + photo.id } src={ photo.url } className='answerPhoto'/>)}
    </div>
  )

  return (
    <div className='answerListEntry'>
      <p
        role={`answer-${ index }`}
        className='answerLine'
      >
        <b>A:  </b>{ answer.body }
      </p>
      { answer.photos.length > 0 ? <AnswerPhotos /> : null }
      <div className='options answerOptions'>
        <p>
          by { answer.answerer_name === 'Seller' ? <b>Seller</b> : answer.answerer_name }, { date }
        </p>
        <p> | </p>
        <p>Helpful? </p>
          { alreadyLiked
            ? <p>{ `Yes (${yesCount}) ` }</p>
            : <p onClick={e => handleLike(e)}><span className='statusLink'>Yes</span>{` (${yesCount})` }</p>
          }
          { alreadyReported
            ? <p>Reported</p>
            : <p onClick={e => handleReport(e)} className='statusLink'>Report</p>
          }
      </div>
    </div>
  )
};

export default AnswerListEntry;