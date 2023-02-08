import { render, fireEvent } from '@testing-library/react';
import '@testing-library//jest-dom';
import Search from '../Search.jsx';

it('should trigger a change on user input if more than 3 characters', () => {
  var userInput = '';
  const setSearch = (entry) => { userInput = entry };

  const utils = render(<Search setSearch={ setSearch }/>);
  const input = utils.getByLabelText('search');
  fireEvent.change(input, { target: { value: 'eat' }});

  expect(userInput).toBe('eat');
});

it('should not trigger a change on user input if less than 3 characters', () => {
  var userInput = '';
  const setSearch = (entry) => { userInput = entry };

  const utils = render(<Search setSearch={ setSearch }/>);
  const input = utils.getByLabelText('search');
  fireEvent.change(input, { target: { value: 'et' }});

  expect(userInput).toBe('');
})