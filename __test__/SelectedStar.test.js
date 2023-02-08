import TestRenderer from 'react-test-renderer';
import SelectedStar from '../client/src/components/RatingsReviews/SelectedStar.jsx';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';



describe('ProductCharacteristic testing', () => {

  it('should have two span to show selected stars', () => {
    const testRenderer = TestRenderer.create(
      <SelectedStar stars={'5'}></SelectedStar>
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findAll(node => node.type === 'span')).toHaveLength(2);
  });

  test('should invoke handleUserClick once user click', async () => {
    const handleSortStar = jest.fn();
    const utils = render( <SelectedStar stars={'5'} handleSortStar={handleSortStar}></SelectedStar>)
    const sort = utils.getByTestId('selectedstar')
    expect(sort).toBeTruthy();


    fireEvent.click(sort)
    expect(handleSortStar).toHaveBeenCalledTimes(1);

  });

});


