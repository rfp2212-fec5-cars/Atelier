/**
 * @jest-environment jsdom
 */
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import AddToCartButton from '../Subcomponents/AddToCart/AddToCartButton.jsx';


afterEach(cleanup);

it ('expect button to display Add to Cart if there is stock', async () => {
  await render(<AddToCartButton currentStyle={{'skus': {'123456': {quantity: 2}}}} />);
  const element = screen.getByTestId('cart-button');
  expect(element).toHaveTextContent('Add To Cart');
});

it ('renders properly', async () => {
  await render(<AddToCartButton currentStyle={{'skus': {'123456': {quantity: 2}}}} />);
  expect.anything();
});