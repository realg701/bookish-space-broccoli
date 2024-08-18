export const calculateArea = (rectangle: {
  width: number;
  height: number;
}): string => {
  return `Rectangle area is ${rectangle.width * rectangle.height}`;
};

export const calculatePerimeter = (rectangle: {
  width: number;
  height: number;
}): string => {
  return `Rectangle perimeter is ${2 * (rectangle.width + rectangle.height)}`;
};
