import { render, screen, waitFor, cleanup } from '@testing-library/react/pure';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { questionList, product_id, product_name } from '../exampleData.js';
import QA from '../QA.jsx';
import QuestionList from '../Questions/QuestionList.jsx';

axios.defaults.baseURL = 'http://localhost:3000';

afterEach(cleanup);

describe('Q&A Component', () => {

  it('should render four questions at load', () => {
    render(<QA product_id={ product_id } product_name={ product_name }/>);
    return waitFor(expect(screen.queryByTestId('loading')).not.toBeInTheDocument)
      .then(() => {
        const questions = screen.queryAllByRole(/^question/);
        expect(questions.length).toEqual(4);
      })
    });

  it('should render two more questions when user presses button', () => {
    render(<QA product_id={ product_id } product_name={ product_name }/>);
    return waitFor(expect(screen.queryByTestId('loading')).not.toBeInTheDocument)
      .then( async () => {
        const questions = screen.queryAllByRole(/^question/);
        expect(questions.length).toEqual(4);

        const button = screen.getByRole('more-questions');
        await userEvent.click(button);

        const moreQuestions = screen.queryAllByRole(/^question/);
        expect(moreQuestions.length).toEqual(6);
      })
  })

  it('should open the ask question modal when ask question button is clicked', () => {
    render(<QA product_id={ product_id } product_name={ product_name }/>);
    return waitFor(expect(screen.queryByTestId('loading')).not.toBeInTheDocument)
      .then( async () => {
        const button = screen.getByRole('button', { name: /Ask Your Question/i });
        await userEvent.click(button);

        expect(screen.getByText(/^your question$/i )).toBeInTheDocument();
      })
  })

});

  // screen.logTestingPlaygroundURL();
    // it('should render two more questions when user clicks addQuestion button', () => {
    //   waitFor(expect(screen.queryByTestId('loading')).not.toBeInTheDocument)
    //     .then(async () => {
    //       var questions = screen.queryAllByRole(/^question/);
    //       expect(questions.length).toEqual(4);

    //       const link = screen.getByRole('more-questions');
    //       await userEvent.click(link);

    //       questions = screen.queryAllByRole(/question/);
    //       expect(questions.length).toEqual(6);
    //     })
    //   })