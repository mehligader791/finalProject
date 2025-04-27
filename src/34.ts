function findLongestWord(text: string): number {
    let maxLength = 0;
    for (let i = 0; i < text.length - 1; i++) {
        if (text[i].length > maxLength) {
            maxLength = text[i].length;
        }
    }
    return maxLength;
}

function isPalindrome(str: string): boolean {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
console.log(isPalindrome("LevelUP"));
