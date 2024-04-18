//idPersonal,idEmpleado, nombre, apellidos,numId, estadoCivil, anioEntrada, numDespacho, area, seccionAsignada
const personalForm = document.getElementById('personalForm');
const personalTableBody = document.getElementById('personalTable').getElementsByTagName('tbody')[0];

let personal = [];

personalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellidos = document.getElementById('apellidos').value;
  const numId = document.getElementById('numId').value;
  const estadoCivil = document.getElementById('estadoCivil').value;
  const anioEntrada = document.getElementById('anioEntrada').value;
  const numDespacho = document.getElementById('numDespacho').value;
  const area = document.getElementById('area').value;
  const seccionAsignada = document.getElementById('seccionAsignada').value;

  const nuevoPersonal = {
    nombre,
    apellidos,
    numId,
    estadoCivil,
    anioEntrada,
    numDespacho,
    area,
    seccionAsignada
  };

  personal.push(nuevoPersonal);

  const newRow = personalTableBody.insertRow();

  for (const key in nuevoPersonal) {
    const newCell = newRow.insertCell();
    const newText = document.createTextNode(nuevoPersonal[key]);
    newCell.appendChild(newText);
  }

  document.getElementById('personalForm').reset();

  alert('Se ha creado al personal.');
});