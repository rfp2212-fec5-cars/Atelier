import { render, screen, waitFor } from '@testing-library/react/pure';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import QA from '../QA.jsx';

axios.defaults.baseURL = 'http://localhost:3000';

describe('Q&A Component', () => {
  // setting up testing
  const product_id = 40351;
  const product_name = 'YEasy350';
  render(<QA product_id={ product_id } product_name={ product_name }/>);

  it('should render at most four questions at load', () => {
    return waitFor(() => expect(screen.queryByTestId('loading')).not.toBeInTheDocument())
      .then(() => {
        const questions = screen.queryAllByRole('heading', { name: /q: /i });
        expect(questions.length).toBeLessThanOrEqual(4)
      })
  });

});