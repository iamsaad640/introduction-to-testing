import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
}); // TDD approach, first write tests, then write code
//TDD is best when you know the case, and make it pass
// but its hard when you don't know about who code will perform or you are debuging or scaling already developed code.
describe('subtract', () => {
  it('should subtract first from second', () => {
    expect(subtract(2, 3)).toBe(1);
  });
});

describe('multiply', () => {
  it('should multipy', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

describe('divide', () => {
  it('divide first by second', () => {
    expect(divide(4, 2)).toBe(2);
  });
});
