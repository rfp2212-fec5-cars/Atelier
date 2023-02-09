import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddAnswer from '../Answers/AddAnswer.jsx';
import { product_name, question } from '../exampleData.js';
import axios from 'axios';
import React, { useState } from 'react';

beforeEach(() => {
  var updateAnswers = false;
  const setUpdateAnswers = (boolean) => { updateAnswers = boolean };

  render(<AddAnswer
    product_name={ product_name }
    question={ question }
    updateAnswers={ updateAnswers }
    setUpdateAnswers={ setUpdateAnswers }
  />)

  const link = screen.getByRole('add-answer');
  fireEvent.click(link);
})

/* ===============

Add Answer Modal Window

==================*/

it('should open modal window when click on add answer', () => {
  expect(screen.queryByRole('answer-modal')).toBeInTheDocument;
});

it('should provide error for incorrect email submission', async() => {
  await fireEvent.change(screen.getByRole('answer-email'), {
    target: { value: ''}
  });

  await fireEvent.submit(screen.getByRole('answer-modal'));
  expect(screen.getByRole('answer-email').validity.valueMissing).toBeTruthy();
})

it('does not updateAnswers when invalid submit has occur', async () => {

  // Promise.all([
  //   fireEvent.change(screen.getByRole('answer-email'), {
  //     target: { value: 'google@gmail.com'}
  //   }),

  //   fireEvent.change(screen.getByRole('photo-upload'), {
  //     target: { files: [new File(["foo"], "chucknorris.png", { type: "image/png" })] }
  //   }),

  //   fireEvent.submit(screen.getByRole('answer-modal'))
  // ])

  await fireEvent.change(screen.getByRole('answer-email'), {
    target: { value: 'google@gmail.com'}
  });

  const addPhoto = () => {
    fireEvent.change(screen.getByRole('photo-upload'), {
      target: { files: [new File(["chuck"], "chucknorris.png", { type: "image/png" })] }
    });
  }

  await addPhoto();

  await fireEvent.submit(screen.getByRole('answer-modal'));

  expect(screen.queryByAltText('chucknorris.png')).not.toBeInTheDocument;
})

it('should close modal after successfully posting answer', async () => {
  await fireEvent.change(screen.getByPlaceholderText(/the quality is better than expected.../i), {target: { value: 'how much?'}});

  await fireEvent.change(screen.getByPlaceholderText(/jack543!/i), {target: { value: 'frank' }});

  await fireEvent.change(screen.getByPlaceholderText(/jack@email.com/i), {target: { value: 'google@gmail.com' }});

  await fireEvent.submit(screen.getByRole('answer-modal'));

  expect(screen.queryByRole('answer-modal')).not.toBeInTheDocument;
})