const getSquare = (squareSide) => {
  const squarePerimeter = squareSide * 4;
  const squareArea = squareSide ** 2;

  return { Square: { squareSide, squarePerimeter, squareArea } };
};

const getTriangle = (
  triangleASide,
  triangleBSide,
  triangleBaseSide,
  triangleHeigh
) => {
  const trianglePerimeter = triangleASide + triangleBSide + triangleBaseSide;
  const triangleArea = (triangleBaseSide * triangleHeigh) / 2;

  return {
    Triangle: {
      triangleASide,
      triangleBSide,
      triangleBaseSide,
      triangleHeigh,
      trianglePerimeter,
      triangleArea,
    },
  };
};

const getCircle = (circleRadio) => {
  const circleDiameter = circleRadio * 2;

  const circleCircumference = circleDiameter * Math.PI.toFixed(2);
  const circleArea = Math.pow(circleRadio, 2).toFixed(2) * Math.PI.toFixed(2);
  return {
    Circle: {
      circleRadio,
      circleDiameter,
      circleCircumference,
      circleArea,
    },
  };
};

console.log(getSquare(8));
console.log(getTriangle(4, 5, 6, 5));
console.log(getCircle(3));
