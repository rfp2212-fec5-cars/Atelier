import React, { useState } from 'react';
import axios from 'axios';

const AddQuestion = ({ product_id, product_name, updateQuestions, setUpdateQuestions }) => {
  const [showModal, setShowModal] = useState(false);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const postQuestion = (e) => {
    e.preventDefault();

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

  const questionModal = (
    <div className='modal'>
      <button className='closeModal' onClick={e => setShowModal(false) }>X</button>
      <h3>Ask Your Question</h3>
      <h4>About the { product_name }</h4>
      <form onSubmit={e => postQuestion(e)}>
        <fieldset>
          <label htmlFor='question_body'>Your Question</label>
          <textarea
            name='question_body'
            maxLength='1000'
            placeholder='How is the quality of...'
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
            placeholder='Example: jackson11!'
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
            placeholder='Why did you like the product or not?'
            onChange={e => setEmail(e.target.value)}
            required
          />
          <p>For authentication reasons, you will not be emailed</p>
        </fieldset>
        <button type='submit'>Submit Question</button>
      </form>
    </div>
  )


  return (
    <div>
      <input type='button' onClick={e => setShowModal(true)} value='Ask Your Question' />
      { showModal ? questionModal : null }
    </div>
  )
};

export default AddQuestion;