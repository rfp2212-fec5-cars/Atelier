import { render, screen, waitFor, cleanup } from '@testing-library/react/pure';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { questionList, product_id, product_name } from '../exampleData.js';
import QA from '../QA.jsx';
import QuestionListEntry from '../Questions/QuestionListEntry.jsx';
import AnswerListEntry from '../Answers/AnswerListEntry.jsx';

axios.defaults.baseURL = 'http://localhost:3000';

afterEach(cleanup);

describe('Questions', () => {

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

describe('Answers', () => {
  it('should display the answers after loading', () => {
    const question = questionList[0];
    render(<QuestionListEntry
      question={ question }
      product_name={ product_name }
      index={ 1 } />
    );

    return waitFor(expect(screen.queryByTestId('loading-answers')).not.toBeInTheDocument)
      .then(() => {
        const answers = screen.queryAllByRole(/^answer-/i);
        expect(answers.length).toEqual(2);
      });
  })

  it('should display two more answers when clicking on answer button', () => {
    const question = questionList[0];
    render(<QuestionListEntry
      question={ question }
      product_name={ product_name }
      index={ 1 } />
    );

    return waitFor(expect(screen.queryByTestId('loading-answers')).not.toBeInTheDocument)
      .then(async () => {
        const button = screen.getByRole('more-answers');
        await userEvent.click(button);

        const moreAnswers = screen.queryAllByRole(/^answer-/);
        expect(moreAnswers.length).toEqual(4);
      });
  })

  it('should open the answer question modal when answer button is clicked', () => {
    const question = questionList[0];
    render(<QuestionListEntry
      question={ question }
      product_name={ product_name }
      index={ 1 } />
    );
    return waitFor(expect(screen.queryByTestId('loading-answers')).not.toBeInTheDocument)
      .then( async () => {
        const link = screen.getByRole('add-answer');
        await userEvent.click(link);

        expect(screen.getByText(/^your answer$/i )).toBeInTheDocument();
      })
  })

  it('answer entry should render a photo if present', () => {
    const answer = questionList[0].answers[0];
    render(<AnswerListEntry answer={ answer } index={ 1 }/>);
    return waitFor(expect(screen.queryByTestId('loading-answers')).not.toBeInTheDocument)
      .then(() => {
        const images = screen.queryAllByRole('img');
        expect(images.length).toEqual(2);
      })
  })

});

  // screen.logTestingPlaygroundURL();