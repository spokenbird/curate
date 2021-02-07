import { render, screen } from '@testing-library/react';
import App from './App';
import {any} from "expect";

test('Renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Thank you for using/i);
  expect(linkElement).toBeInTheDocument();
});
