import { test, expect, vi } from 'vitest';
//spies are a tool used to observe and track the behavior of functions during test execution. Spies help verify whether a function was called, how many times it was called, and what arguments were passed to it

test('a super simple test', () => {
  const mockFn = vi.fn(() => 'Hello world!');
  mockFn('Hello world!');
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith('Hello world!');
  expect(mockFn).toHaveBeenCalledOnce();
  expect(mockFn).toHaveBeenCalledTimes(1);
});
