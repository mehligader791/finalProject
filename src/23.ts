function findMaxInArray(arr: number[]): number {
    if (arr.length === 0) return -1;

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function findMinInArray(arr: number[]): number {
    if (arr.length === 0) return -1;

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

function isMonotonic(arr: number[]): boolean {
    let hasDecreasing = false, hasIncreasing = false;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            hasIncreasing = true;
        } else if (arr[i] < arr[i - 1]) {
            hasDecreasing = true;
        }
    }

    return hasIncreasing || hasDecreasing;
}

// Example usage:
const numbers: number[] = [-3, 4, 2, -1, 0];
console.log("Minimum value:", findMinInArray(numbers));
console.log("Maximum value:", findMaxInArray(numbers));
console.log(isMonotonic(numbers)); // Output: true
