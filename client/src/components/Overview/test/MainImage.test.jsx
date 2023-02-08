/**
 * @jest-environment jsdom
 */
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import MainImage from '../Subcomponents/ImageGallery/DefaultViewSubcomponents/MainImage.jsx';


afterEach(cleanup);

it ('Should render an image if imageURL is passed in', async () => {
  await render(<MainImage imageURLs={[{url: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}]} />);
  const element = screen.getByTestId('main-image');
  expect.anything();
});