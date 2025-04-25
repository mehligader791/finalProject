function calculateArea(rectangle1: number[], rectangle2: number[]): number {
  const width = Math.max(rectangle1[0], rectangle2[0]);
  const height = Math.max(rectangle1[1], rectangle2[1]);

  return width * height;
}
