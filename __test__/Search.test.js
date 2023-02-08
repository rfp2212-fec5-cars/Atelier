import TestRenderer from 'react-test-renderer';
import Search from '../client/src/components/RatingsReviews/Search.jsx';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';




describe('search testing', () => {
  test('should exists', async () => {

    const setup = () => {
      const utils = render(<Search setSearch={jest.fn} />)
      const input = utils.getByTestId('search')
      return {
        input,
        ...utils,
      }
    }
    const {input} = setup()

    //console.log(input.value)
    expect(input.value).toBe('');
    fireEvent.change(input, {target: {value: '23'}})

    //console.log(input.value);
    expect(input.value).toBe('23');
  });

  it('should have 1 input', () => {
    const testRenderer = TestRenderer.create(
      <Search ></Search>
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findAll(node => node.type === 'input')).toHaveLength(1);
  });

});


