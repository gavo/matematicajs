console.log(salarios);

function encontrarPersona(name) {
  return salarios.find((el) => el.name === name);
}

function medianaPorPersona(name) {
  const person = encontrarPersona(name);
  const jobs = person.trabajos.map((el) => el.salario);
  return calculateMedian(jobs);
}

function proyeccionSalarial(name) {
  const jobs = encontrarPersona(name).trabajos.map((el) => el.salario);
  let porcentajesAumentos = [];
  for (let i = 1; i < jobs.length; i++) {
    const crecimiento = jobs[i] - jobs[i - 1];
    porcentajesAumentos.push(crecimiento / jobs[i - 1]);
  }
  return (
    calculateMedian(porcentajesAumentos) * jobs[jobs.length - 1] +
    jobs[jobs.length - 1]
  );
}
