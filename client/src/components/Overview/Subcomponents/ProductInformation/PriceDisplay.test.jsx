/**
 * @jest-environment jsdom
 */
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import PriceDisplay from './PriceDisplay';


afterEach(cleanup);

it ('expects price to accurately display price passed in', async () => {
  await render(<PriceDisplay currentStyle={{original_price: 1026}} />);
  const element = screen.getByTestId('price');
  expect(element).toHaveTextContent('1026');
});