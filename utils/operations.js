export function add(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

export function subtract(numbers) {
  if (numbers.length === 0) return 0;
  else return numbers.slice(1).reduce((acc, num) => acc - num, numbers[0]);
}

export function multiply(numbers) {
  if (numbers.length === 0) return 0;
  else return numbers.reduce((acc, num) => acc * num, 1);
}

export function divide(numbers) {
  if (numbers.length === 0) return 0;
  else return numbers.slice(1).reduce((acc, num) => acc / num, numbers[0]);
}

