import { render, screen } from '@testing-library/react';
import App from './App';
import Hello from './hello.jsx';
import Welcome from './welcome.jsx';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
