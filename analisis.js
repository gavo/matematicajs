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

const empresas = {};
for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }
    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

function medianaEmpresaYear(nombre, year) {
  if (!empresas[nombre]) {
    console.warn("la empresa no existe");
    return;
  }
  if (!empresas[nombre][year]) {
    console.warn("La empresa no dio salarios ese año");
    return;
  }
  return calculateMedian(empresas[nombre][year]);
}
console.log(empresas);
function proyeccionPorEmpresa(nombre) {
  if (!empresas[nombre]) {
    console.warn("La empresa no Existe");
    return;
  }
  const listaMedianaYear = Object.keys(empresas[nombre]).map((year) =>
    medianaEmpresaYear(nombre, year)
  );
  let porcentajesAumentos = [];
  for (let i = 1; i < listaMedianaYear.length; i++) {
    const crecimiento = listaMedianaYear[i] - listaMedianaYear[i - 1];
    porcentajesAumentos.push(crecimiento / listaMedianaYear[i - 1]);
  }
  return (
    calculateMedian(porcentajesAumentos) *
      listaMedianaYear[listaMedianaYear.length - 1] +
    listaMedianaYear[listaMedianaYear.length - 1]
  );
}

function medianaGeneral() {
  const medianaPorCadaNombre = salarios.map((persona) =>
    medianaPorPersona(persona.name)
  );
  return calculateMedian(medianaPorCadaNombre);
}

function medianaTop10() {
  const listaMedianas = salarios.map((persona) =>
    medianaPorPersona(persona.name)
  );
  listaMedianas.sort((a, b) => a - b);
  const cantidad = listaMedianas.length / 10;
  const limite = listaMedianas.length - cantidad;
  listaMedianas.splice(0, limite);
  return calculateMedian(listaMedianas);
}
