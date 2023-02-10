import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../../Modal/Modal.jsx';

const AddAnswer = ({ product_name, question, updateAnswers, setUpdateAnswers, logInteraction }) => {
  const [showModal, setShowModal] = useState(false);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  // posts the answer to the api
  const postAnswer = (e) => {
    e.preventDefault();
    logInteraction({
      element: 'Submit Answer',
      widget: 'Q&A'
    })

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
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      formData.append('upload_preset', 'fec-cars');

      // using cloudinary as a third party host database for images
      var options = {
        url: 'https://api.cloudinary.com/v1_1/fec-cars/image/upload',
        method: 'POST',
        data: formData
      };

      axios(options)
        .then(({ data }) => setPhotos(photos.concat(data.url)))
        .catch(err => console.log(err));
    }

    return (
      <input
        role='photo-upload'
        className='addPhoto'
        type='file'
        name='photos'
        accept='image/*'
        onChange={e => loadFile(e)}
      />
    );
  };

  return (
    <div>
      <p role='add-answer' className='statusLink' onClick={e => {
        setShowModal(true)
        logInteraction({
          element: 'Add Answer',
          widget: 'Q&A'
        })
      }} >Add Answer</p>
      <Modal
        title='Submit an Answer'
        subtitle={`${product_name}: ${question.question_body}`}
        onClose={() => setShowModal(false)}
        show={ showModal }
      >
        <form role='answer-modal' onSubmit={e => postAnswer(e)}>
          <fieldset>
            <label htmlFor='answer_body'>Your Answer <span className='required'>*</span></label>
            <textarea
              name='answer_body'
              maxLength='1000'
              placeholder='The quality is better than expected...'
              onChange={e => setBody(e.target.value)}
              className='form-input'
              onInvalid={e => e.target.setCustomValidity('You must enter an answer')}
              onInput={e => e.target.setCustomValidity('')}
              required >
            </textarea>
          </fieldset>
          <fieldset>
            <label htmlFor='nickname'>What is your nickname <span className='required'>*</span></label>
            <input
              type='text'
              name='nickname'
              maxLength='60'
              placeholder='Example: jack543!'
              onChange={e => setName(e.target.value)}
              className='form-input'
              onInvalid={e => e.target.setCustomValidity('You must enter your nickname')}
              onInput={e => e.target.setCustomValidity('')}
              required
            />
            <p className='disclaimer'>For privacy reasons, do not use your full name or email address</p>
          </fieldset>
          <fieldset>
            <label htmlFor='email'>Your Email <span className='required'>*</span></label>
            <input
              role='answer-email'
              type='email'
              name='email'
              maxLength='60'
              placeholder='Example: jack@email.com'
              onChange={e => setEmail(e.target.value)}
              className='form-input'
              onInvalid={e => e.target.setCustomValidity('The email address provided is not in the correct email format')}
              onInput={e => e.target.setCustomValidity('')}
              required
            />
            <p className='disclaimer'>For authentication reasons, you will not be emailed</p>
          </fieldset>
          <fieldset>
            <label htmlFor='photos'>Upload your photos</label>
            <div>
              <div className='answerPhotos'>
                { photos.map( (photo, index) => <img alt={ photo } key={ index } src={ photo } className='answerPhoto'/> ) }
              </div>
              { photos.length < 5 ? <AddPhoto /> : null }
            </div>
          </fieldset>
          <fieldset>
            <button type='submit'>Submit answer</button>
          </fieldset>
        </form>
      </Modal>
    </div>
  );
}

export default AddAnswer;