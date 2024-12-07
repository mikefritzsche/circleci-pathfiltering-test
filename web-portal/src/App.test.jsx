// web-portal/src/App.test.jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body.innerHTML).toBeTruthy();
  });
});

// web-portal/src/setup.test.js
import { describe, it, expect } from 'vitest';

describe('Initial test setup', () => {
  it('works as expected', () => {
    expect(1 + 1).toBe(2);
  });
});
