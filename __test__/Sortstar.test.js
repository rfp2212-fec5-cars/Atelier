import TestRenderer from 'react-test-renderer';
import Sortstar from '../client/src/components/RatingsReviews/Sortstar.jsx';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';



describe('ProductCharacteristic testing', () => {
  it('should exists', () => {
    const testRenderer = TestRenderer.create(
      <Sortstar k={5} rateStar={[-1, '11.94', '5.97', '23.88', '6.72', '51.49']}></Sortstar>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have one span to distinguish stars', () => {
    const testRenderer = TestRenderer.create(
      <Sortstar k={5} rateStar={[-1, '11.94', '5.97', '23.88', '6.72', '51.49']}></Sortstar>
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findAll(node => node.type === 'span')).toHaveLength(1);
  });

  test('should invoke handleUserClick once user click', async () => {
    const handleUserClick = jest.fn();
    const utils = render(<Sortstar k={5} rateStar={[-1, '11.94', '5.97', '23.88', '6.72', '51.49']} handleUserClick={handleUserClick}></Sortstar>)
    const sort = utils.getByTestId('sortstar')
    expect(sort).toBeTruthy();


    fireEvent.click(sort)
    expect(handleUserClick).toHaveBeenCalledTimes(1);

  });

});


