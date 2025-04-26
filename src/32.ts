function findLongestCommonSubsequence(str1: string, str2: string): number {
    let m = str1.length;
    let n = str2.length;

    // Initialize the DP table with zeros
    const dp: number[] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

console.log(findLongestCommonSubsequence("abcde", "ace")); // Output: 3
