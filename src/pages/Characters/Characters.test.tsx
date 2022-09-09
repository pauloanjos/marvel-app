import React from 'react';
import { render, screen } from '@testing-library/react';
import {Characters} from '.';

test('renders learn react link', () => {
  render(<Characters />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
