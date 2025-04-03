function findCommonElements(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const commonElements = new Set([...set1].filter(item => set2.has(item)));
    return [...commonElements];
}

const result = findCommonElements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]);
console.log(result);
