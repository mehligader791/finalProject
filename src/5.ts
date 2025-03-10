// This is an example of a TypeScript function that takes in a number and returns its square root.
function calculateSquareRoot(number: number): number {
  if (number < 0) {
    throw new Error("Cannot take the square root of a negative number.");
  }
  return Math.sqrt(number);
}
