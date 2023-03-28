const list = [5, 10, 15, 20, 20, 21];

const esPar = (list) => list.length % 2 === 0;

const averageForeach = (list) => {
  let total = 0;
  list.forEach((el) => {
    total += el;
  });
  return (total / list.length).toFixed(2);
};

const averageReduce = (list) =>
  (list.reduce((sum, val) => sum + val, 0) / list.length).toFixed(2);

const calculateMedian = (list) => {
  const aux = Object.assign([], list);
  aux.sort((a, b) => a - b);
  if (esPar(list)) {
    return Math.round((aux[aux.length / 2] + aux[aux.length / 2 - 1]) / 2, 2);
  }
  return aux[Math.floor(aux.length / 2)];
};

const calculateMode = (list) => {
  const result = {};
  list.forEach((el) => {
    if (result[el]) {
      result[el] += 1;
    } else {
      result[el] = 1;
    }
  });
  let mode = null;
  Object.keys(result).forEach((el) => {
    if (!mode || result[el] > result[mode]) {
      mode = el;
    }
  });
  return mode;
};

console.log(
  "list:",
  list,
  "\naverage:",
  averageForeach(list),
  "\naverage reduce:",
  averageReduce(list),
  "\nmedian:",
  calculateMedian(list),
  "\nmode:",
  calculateMode(list)
);

const notes = [
  {
    course: "Educación Física",
    note: 10,
    credit: 2,
  },
  {
    course: "Programación",
    note: 8,
    credit: 5,
  },
  {
    course: "Finanzas personales",
    note: 7,
    credit: 5,
  },
];

const calculatePonderingAverage = (notes) => {
  let c = notes.reduce((t, e) => t + e.credit, 0);
  return notes.reduce((t, e) => {
    t = t + (e.credit * e.note) / c;
    return t;
  }, 0);
};
console.log("Notas Ponderadas", notes);
console.log("Promedio Ponderado", calculatePonderingAverage(notes).toFixed(2));
