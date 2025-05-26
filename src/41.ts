function sumEvenNumbers(numbers: number[]): number {
  let sum = 0;
  numbers.forEach(number => {
    if (number % 2 === 0) {
      sum += number;
    }
  });
  return sum;
}

const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(inputNumbers));
