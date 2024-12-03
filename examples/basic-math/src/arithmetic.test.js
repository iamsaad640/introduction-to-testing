import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('should parse string to number', () => {
    expect(add('1', 1)).toBe(2);
  });

  it('should throw if not a number after parsing', () => {
    expect(() => add('potato', 1)).toThrow(); // function is in callback
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

  it('should throw when divideb by zero', () => {
    expect(() => divide(10, 0)).toThrow();
  });
});

// how to handle weired cases like adding 1 with '1' or not giving second argument etc
// answer to that is
// 1. fail gracefully (you know, who will do that)
// 2. if you don't know what to do, just throw an exception

// but this should not ❌tes be an answer, that i don't know about it, let it happen as they are
