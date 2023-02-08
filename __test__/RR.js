
import React from 'react';
import axios from 'axios';
import { render, screen, fireEvent, cleanup, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RR from '../client/src/components/RatingsReviews/RR.jsx';
import Search from '../client/src/components/RatingsReviews/Search.jsx';
import MockData from './mockData.js';

jest.mock('axios');

afterEach(() => {
  cleanup(); // unmount tree
  jest.clearAllMocks();
});

describe('RR testing', ()=>{
  it('should correctly render', async () => {

    // axios.get
    //   .mockResolvedValueOnce({ data : MockData.featureMeta});

    // axios.get
    //   .mockResolvedValueOnce({data : MockData.reviews});

   // render(<RR productId={MockData.feature.id} productName={MockData.feature.name}/>)
    render(<RR productId={40344} productName={'blue shoes'}/>)
    expect(screen.getByRole('heading', {level:2})).toBeInTheDocument();
    expect(screen.getByText('RATINGS & REVIEWS')).toBeInTheDocument();

    screen.debug();

    // let tree = testRenderer.toJSON();
    // expect(tree).toMatchSnapshot();
  });

});