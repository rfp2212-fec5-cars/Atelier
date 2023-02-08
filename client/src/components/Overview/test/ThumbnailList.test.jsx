/**
 * @jest-environment jsdom
 */
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ThumbnailList from '../Subcomponents/ImageGallery/DefaultViewSubcomponents/ThumbnailList.jsx';


afterEach(cleanup);

it ('should render thumbnail list if thumbnailURLs are passed in', async () => {
  await render(<ThumbnailList thumbnailURLs={[{thumbnail_url: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}]} />);
  const element = screen.getByTestId('tnt');
  expect.anything();
});