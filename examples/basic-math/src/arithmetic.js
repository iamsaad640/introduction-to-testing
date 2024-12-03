export const add = (a, b) => {
  if (typeof a === 'string') a = Number(a);
  if (typeof b === 'string') b = Number(b);
  if (isNaN(a)) throw new Error();
  if (isNaN(b)) throw new Error();
  return a + b;
};

export const subtract = (a, b) => b - a;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
  if (b === 0) throw new Error();
  return a / b;
};
