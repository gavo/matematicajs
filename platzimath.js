const list = [13, 56, 23, 22, 66, 32, 12, 63, 74, 12];

const averageForeach = (list) => {
  let total = 0;
  list.forEach((el) => {
    total += el;
  });
  return (total / list.length).toFixed(2);
};

const averageReduce = (list) =>
  (list.reduce((sum, val) => sum + val, 0) / list.length).toFixed(2);

console.log(list, averageForeach(list), averageReduce(list));
