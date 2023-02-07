import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import QA from './QA.jsx';

afterEach(cleanup);

test('should not crash on load', () => {
  render(<QA />);
})