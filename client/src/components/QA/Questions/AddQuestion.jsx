import React from 'react';

const AddQuestion = () => {

  const postQuestion = (e) => {
    e.preventDefault();
  }

  const questionModal = (
    <div className='modal'>
      <h3>Ask Your Question</h3>
      <h4>About the Product Name</h4>
      <form>
        <fieldset>
          <label htmlFor='question_body'>Your Question</label>
          <textarea name='question_body' maxlength='1000' placeholder='How is the quality of...' required></textarea>
        </fieldset>
        <fieldset>
          <label htmlFor='username'>Nickname</label>
          <input type='text' name='username' maxlength='60' placeholder='Example: jackson11!' required />
          <p>“For privacy reasons, do not use your full name or email address”</p>
        </fieldset>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' maxlength='60' placeholder='Why did you like the product or not?' required />
          <p>“For authentication reasons, you will not be emailed”</p>
        </fieldset>
        <button type='submit' onClick={e => postQuestion(e)}>Post Question</button>
      </form>
    </div>
  )


  return (
    <button type='submit'>Ask Your Question</button>
  )
};

export default AddQuestion;