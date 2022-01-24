// Essa função retorna a área de 3 retângulos com o uso do Spread Operator.

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangles)
  console.log(rectangle[0] * rectangle[1]);
});
