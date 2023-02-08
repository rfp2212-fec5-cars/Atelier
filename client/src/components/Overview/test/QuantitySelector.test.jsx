/**
 * @jest-environment jsdom
 */
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import QuantitySelector from '../Subcomponents/AddToCart/QuantitySelector.jsx';


afterEach(cleanup);

it ('expects value of select to be 1 on render', async () => {
  await render(<QuantitySelector currentStyle={{skus: {
  }}} />);
  const element = screen.getByTestId('quantity-selector');
  expect(element).toHaveTextContent('1');
});