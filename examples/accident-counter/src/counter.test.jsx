import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const counter = screen.getByTestId('counter-count');
    expect(counter.textContent).toBe('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const decButton = screen.getByRole('button', {
      name: /decrement/i,
    });
    const resetButton = screen.getByRole('button', {
      name: /reset/i,
    });
    expect(decButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    const counterUnit = screen.getByTestId('counter-unit');
    expect(counterUnit.textContent).toBe('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    const counter = screen.getByTestId('counter-count');
    const count = counter.textContent;
    const incButton = screen.getByRole('button', {
      name: /increment/i,
    });
    await userEvent.click(incButton);
    expect(counter.textContent).toBe(`${Number(count) + 1}`);
  });

  it('displays "day" when the count is 1', async () => {
    const counterUnit = screen.getByTestId('counter-unit');
    const incButton = screen.getByRole('button', {
      name: /increment/i,
    });
    await userEvent.click(incButton);
    expect(counterUnit.textContent).toBe('day');
  });

  // screen.get... methods immidiate
  // screen.find... methods wait like async code

  it.todo(
    'decrements the count when the "Decrement" button is clicked',
    async () => {},
  );

  it.todo('does not allow decrementing below 0', async () => {});

  it.todo(
    'resets the count when the "Reset" button is clicked',
    async () => {},
  );

  it.todo(
    'disables the "Decrement" and "Reset" buttons when the count is 0',
    () => {},
  );

  it.todo('updates the document title based on the count', async () => {});
});
