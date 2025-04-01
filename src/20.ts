function reverseArray(arr: number[]): number[] {
  const reversed = arr.slice().reverse();
  return reversed;
}

const numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));
