import { describe, it, expect } from 'vitest';
import { add } from './arithmetic';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
}); // TDD approach, first write tests, then write code

describe.todo('subtract', () => {});

describe.todo('multiply', () => {});

describe.todo('divide', () => {});
