import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { setup } from '@testing-library/user-event';
import QA from '../QA.jsx';

afterEach(cleanup);

beforeEach(async () => {
  const product_id = 40351;
  const product_name = 'YEasy350';

  await render(<QA product_id={ product_id } product_name={ product_name }/>);
})

describe('Q&A Component', () => {
  it('should render the search component', async () => {
    const search = screen.getByRole('search');
    expect(search).toBeTruthy();
  });

  it('should render the questionList component', async () => {
    const questionList = screen.getByRole('questionList');
    expect(questionList).toBeTruthy();
  });
})