import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../../Modal/Modal.jsx';

const AddQuestion = ({ product_id, product_name, updateQuestions, setUpdateQuestions, logInteraction }) => {
  const [showModal, setShowModal] = useState(false);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const postQuestion = (e) => {
    e.preventDefault();
    logInteraction({
      element: 'Submit Question',
      widget: 'Q&A'
    })

    var options = {
      url: '/qa/questions',
      method: 'POST',
      data: { body, name, email, product_id }
    }

    axios(options)
      .then(() => {
        alert('Posted Your Question');
        setShowModal(false);
        setUpdateQuestions(!updateQuestions);
      })
      .catch((err) => {
        console.log('Failed to post question', err);
      })
  }

  return (
    <div>
      <button onClick={e => {
        logInteraction({ element: 'Post Question', widget: 'Q&A' })
        setShowModal(true)
      }}>Ask Your Question</button>
      <Modal
        title='Ask Your Question'
        subtitle={`About the ${ product_name }`}
        onClose={() => setShowModal(false)}
        show={ showModal }
      >
        <form onSubmit={e => postQuestion(e)} role='question-modal'>
          <fieldset>
            <label htmlFor='question_body'>Your Question <span className='required'>*</span></label>
            <textarea
              name='question_body'
              maxLength='1000'
              placeholder='How is the quality of...'
              onChange={e => setBody(e.target.value)}
              className='form-input'
              onInvalid={e => e.target.setCustomValidity('You must enter a question')}
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
              placeholder='Example: jackson11!'
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
              type='email'
              name='email'
              maxLength='60'
              placeholder='Why did you like the product or not?'
              onChange={e => setEmail(e.target.value)}
              className='form-input'
              onInvalid={e => e.target.setCustomValidity('The email address provided is not in the correct email format')}
              onInput={e => e.target.setCustomValidity('')}
              required
            />
            <p className='disclaimer'>For authentication reasons, you will not be emailed</p>
          </fieldset>
          <fieldset>
            <button type='submit'>Submit Question</button>
          </fieldset>
        </form>
      </Modal>
    </div>
  )
};

export default AddQuestion;