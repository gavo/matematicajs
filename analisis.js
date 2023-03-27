console.log(salarios);

function encontrarPersona(name) {
  return salarios.find((el) => el.name === name);
}

function medianaPorPersona(name) {
  const person = encontrarPersona(name);
  const jobs = person.trabajos.map((el) => el.salario);
  return calculateMedian(jobs);
}
