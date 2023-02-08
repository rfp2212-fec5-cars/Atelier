import TestRenderer from 'react-test-renderer';
import ProductCharacteristic from '../client/src/components/RatingsReviews/ProductCharacteristic.jsx';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';



describe('sortStar testing', () => {
  it('should exists', () => {
    const testRenderer = TestRenderer.create(
      <ProductCharacteristic type={'Comfort'} info = {{'value': 4}}></ProductCharacteristic>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have 11 div', () => {
    const testRenderer = TestRenderer.create(
      <ProductCharacteristic type={'Comfort'} info = {{'value': 4}}></ProductCharacteristic>
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findAll(node => node.type === 'div')).toHaveLength(11);
  });
  it('should have Comfort text', () => {
    const {getByText} = render(
      <ProductCharacteristic type={'Comfort'} info = {{'value': 4}}></ProductCharacteristic>
    );
    expect(getByText('Comfort')).toBeTruthy();
    expect(getByText('poor')).toBeTruthy();
    expect(getByText('perfect')).toBeTruthy();

  });

});


