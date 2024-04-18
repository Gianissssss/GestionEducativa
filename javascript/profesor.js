//idProfesor,idEmpleado, nombre, apellidos,numId, estadoCivil, anioEntrada, numDespacho, departamento


const studentForm = document.getElementById('profesorForm');
const studentTableBody = document.getElementById('profesorTable').getElementsByTagName('tbody')[0];

let profesores = [];

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellidos = document.getElementById('apellidos').value;
  const numId = document.getElementById('numId').value;
  const estadoCivil = document.getElementById('estadoCivil').value;
  const anioEntrada = document.getElementById('anioEntrada').value;
  const departamento = document.getElementById('departamento').value;

  const nuevoProfesor = {
    nombre,
    apellidos,
    numId,
    estadoCivil,
    anioEntrada,
    departamento
  };

  profesores.push(nuevoProfesor);

  const newRow = studentTableBody.insertRow();

  for (const key in nuevoProfesor) {
    const newCell = newRow.insertCell();
    const newText = document.createTextNode(nuevoProfesor[key]);
    newCell.appendChild(newText);
  }

  document.getElementById('profesorForm').reset();

  alert('Se ha creado el profesor.');
});