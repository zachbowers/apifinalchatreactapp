import React from 'react';
import { render } from '@testing-library/react';
import ChatApp from './ChatApp';

test('renders learn react link', () => {
  const { getByText } = render(<ChatApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
