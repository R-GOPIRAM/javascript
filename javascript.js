function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Input must be a non-empty array of numbers.');
  }

  let max = numbers[0]; // Assume the first element as the maximum

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; // Update max if a larger number is found
    }
  }

  return max;
}
