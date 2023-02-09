import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddQuestion from '../Questions/AddQuestion.jsx';
import { product_id, product_name } from '../exampleData.js';
import axios from 'axios';
import React, { useState } from 'react';

beforeEach(() => {
  render(<AddQuestion
    product_name={ product_name }
    product_id={ product_id }
  />)

  const link = screen.getByRole('button', { name: 'Ask Your Question'});
  fireEvent.click(link);
})

/* ===============

Add Question Modal Window

==================*/

it('should open modal window when click on add question', () => {
  expect(screen.queryByRole('question-modal')).toBeInTheDocument;
});

it('should close modal after successfully posting question', async () => {
  await fireEvent.change(screen.getByPlaceholderText(/how is the quality of.../i), {target: { value: 'how much?'}});

  await fireEvent.change(screen.getByPlaceholderText(/jackson11!/i), {target: { value: 'frank' }});

  await fireEvent.change(screen.getByPlaceholderText(/why did you like the product or not/i), {target: { value: 'google@gmail.com' }});

  await fireEvent.submit(screen.getByRole('question-modal'));

  expect(screen.queryByRole('question-modal')).not.toBeInTheDocument;
})