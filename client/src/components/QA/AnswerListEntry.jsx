import React from 'react';

const AnswerListEntry = ({ answer }) => {
  return (
    <div>
      <h5>A: { answer.body }</h5>
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