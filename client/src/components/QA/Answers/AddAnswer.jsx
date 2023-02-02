import React, { useState } from 'react';
import axios from 'axios';

const AddAnswer = ({ product_name, question, updateAnswers, setUpdateAnswers }) => {
  const [showModal, setShowModal] = useState(false);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  // posts the answer to the api
  const postAnswer = (e) => {
    e.preventDefault();

    var options = {
      url: `qa/questions/${question.question_id}/answers`,
      method: 'POST',
      data: { body, name, email, photos }
    }

    axios(options)
      .then(() => {
        setShowModal(false);
        setUpdateAnswers(!updateAnswers);
      })
      .catch((err) => {
        console.log('Failed posting answer', err);
      })
  }

  // adds the photos to the answer modal window
  const AddPhoto = () => {
    const loadFile = (e) => {
      var photo = URL.createObjectURL(e.target.files[0]);
      setPhotos(photos.concat(photo));
    }

    return (
      <input
        class='addPhoto'
        type='file'
        name='photos'
        accept='image/*'
        onChange={e => loadFile(e)}
      />
    );
  }

  const answerModal = (
    <div className='qaModal'>
      <button className='closeModal' onClick={e => setShowModal(false)}>X</button>
      <h3>Submit your Answer</h3>
      <h4>{ product_name }: { question.question_body }</h4>
      <form onSubmit={e => postAnswer(e)}>
        <fieldset>
          <label htmlFor='answer_body'>Your Answer</label>
          <textarea
            name='answer_body'
            maxLength='1000'
            placeholder='The quality is better than expected...'
            onChange={e => setBody(e.target.value)}
            required >
          </textarea>
        </fieldset>
        <fieldset>
          <label htmlFor='nickname'>What is your nickname</label>
          <input
            type='text'
            name='nickname'
            maxLength='60'
            placeholder='Example: jack543!'
            onChange={e => setName(e.target.value)}
            required
          />
          <p>For privacy reasons, do not use your full name or email address</p>
        </fieldset>
        <fieldset>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            name='email'
            maxLength='60'
            placeholder='Example: jack@email.com'
            onChange={e => setEmail(e.target.value)}
            required
          />
          <p>For authentication reasons, you will not be emailed</p>
        </fieldset>
        <fieldset>
          <label htmlFor='photos'>Upload your photos</label>
          <div>
            { photos.map( photo => <img src={ photo } className='answerPhoto'/> ) }
            { photos.length < 5 ? <AddPhoto /> : null }
          </div>
        </fieldset>
        <button type='submit'>Submit answer</button>
      </form>
    </div>
  );

  return (
    <div>
      <p onClick={e => setShowModal(true)} className='statusLink'>Add Answer</p>
      { showModal ? answerModal : null }
    </div>
  );
}

export default AddAnswer;