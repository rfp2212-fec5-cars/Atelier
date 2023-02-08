/**
 * @jest-environment jsdom
 */
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SizeSelector from '../Subcomponents/AddToCart/SizeSelector.jsx';


afterEach(cleanup);

it ('should render OUT OF STOCK if there is no quantity for any of the skus', async () => {
  await render(<SizeSelector currentStyle={{skus: {
  }}} />);
  const element = screen.getByTestId('size');
  expect(element).toHaveTextContent('OUT OF STOCK');
});