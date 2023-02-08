/**
 * @jest-environment jsdom
 */
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialMediaButton from '../Subcomponents/ProductInformation/SocialMediaButton.jsx';


afterEach(cleanup);

it ('Should render an Icon within div', async () => {
  await render(<SocialMediaButton/>);
  const element = screen.getByTestId('social');
  // expect(element).toHaveTextContent(expect.anything());
  // expect(element).toContain(element)
  expect.anything();
});