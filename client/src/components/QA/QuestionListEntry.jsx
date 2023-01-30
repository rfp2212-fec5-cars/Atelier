import React from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';

const QuestionListEntry = ({ question }) => {

  // get the answers from the question id
  var exampleAnswerList = {
    "question": "1",
    "page": 0,
    "count": 5,
    "results": [
      {
        "answer_id": 8,
        "body": "What a great question!",
        "date": "2018-01-04T00:00:00.000Z",
        "answerer_name": "metslover",
        "helpfulness": 8,
        "photos": [],
      },
      {
        "answer_id": 5,
        "body": "Something pretty durable but I can't be sure",
        "date": "2018-01-04T00:00:00.000Z",
        "answerer_name": "metslover",
        "helpfulness": 5,
        "photos": [{
            "id": 1,
            "url": "urlplaceholder/answer_5_photo_number_1.jpg"
          },
          {
            "id": 2,
            "url": "urlplaceholder/answer_5_photo_number_2.jpg"
          },
          // ...
        ]
      },
      // ...
    ]
  }


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
      <AnswerList answers={ exampleAnswerList.results }/>
    </div>
  );
};

export default QuestionListEntry;