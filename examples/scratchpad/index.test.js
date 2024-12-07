import { test, expect, vi } from 'vitest';
//spies are a tool used to observe and track the behavior of functions during test execution. Spies help verify whether a function was called, how many times it was called, and what arguments were passed to it

const spyLog = vi.spyOn(console, 'log');

test('a super simple test', () => {
  console.log('Hello world!');
  expect(spyLog).toHaveBeenCalled();
  expect(spyLog).toHaveBeenCalledWith('Hello world!');
  expect(spyLog).toHaveBeenCalledOnce();
  expect(spyLog).toHaveBeenCalledTimes(1);
});
