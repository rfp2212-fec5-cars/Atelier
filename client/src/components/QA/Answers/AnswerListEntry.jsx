import React from 'react';

const AnswerListEntry = ({ answer }) => {

  // format the date
  var date = new Date(answer.date);
  date = date.toLocaleString('default', {month: 'long'}) + ' ' + date.getDate() + ', ' + date.getFullYear();

  return (
    <div>
      <p><b>A: </b>{ answer.body }</p>
      <p>by { answer.answerer_name }, { date }</p>
      <label>Helpful? </label>
      <button type='submit'>Yes</button>
      { answer.helpfulness }
      <div>
        <button type='submit'>Report</button>
      </div>
    </div>
  )
};

export default AnswerListEntry;