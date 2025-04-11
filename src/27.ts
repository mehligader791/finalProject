function findMaxInArray(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage:
const numbers = [5, 3, 8, 2, 7, 1, 6];
console.log("The maximum number in the array is:", findMaxInArray(numbers));
