import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddAnswer from '../Answers/AddAnswer.jsx';
import { product_name, question } from '../exampleData.js';
import axios from 'axios';

it('should open modal window when click on add answer', () => {
  const utils = render(<AddAnswer
    product_name={ product_name }
    question={ question }
  />)

  const link = utils.getByRole('add-answer');
  fireEvent.click(link);
  expect(utils.queryByRole('answer-modal')).toBeInTheDocument;
});

it('should provide error for incorrect email submission', () => {
  const utils = render(<AddAnswer
    product_name={ product_name }
    question={ question }
  />)

  const link = utils.getByRole('add-answer');
  fireEvent.click(link);

  fireEvent.change(utils.getByRole('answer-email'), {
    target: { value: ''}
  });

  fireEvent.submit(utils.getByRole('answer-modal'));
  expect(utils.getByRole('answer-email').validity.valueMissing).toBeTruthy();
})