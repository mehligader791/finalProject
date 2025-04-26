function reverseString(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  const reversed = s.slice(-1).concat(reversed.substring(0, -1));
  return reversed;
}
