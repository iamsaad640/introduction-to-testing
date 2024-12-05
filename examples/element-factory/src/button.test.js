import { createButton } from './button.js';
import { screen, fireEvent } from '@testing-library/dom';
import { userEvent } from '@testing-library/user-event';

describe('createButton', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should create a button element', () => {
    document.body.appendChild(createButton());
    const button = screen.getByRole('button', {
      name: 'Click Me',
    });
    expect(button).toBeInTheDocument();
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    document.body.appendChild(createButton());
    const button = screen.getByRole('button', {
      name: 'Click Me',
    });
    // userEvent(button, new MouseEvent('click')); // one option
    await userEvent.click(button); //another option
    expect(button.textContent).toBe('Clicked!');
  });
});
