//Creamos las clases Persona, Estudiante, Profesor y PersonalServicio
//CLASE PERSONA
class Persona {
    constructor( nombre, apellidos, numId,estadoCivil) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.numId = numId;
        this.estadoCivil = estadoCivil;
    }
    
    cambiarEstadoCivil() {
        const nuevoEstadoCivil = prompt("Ingrese nuevo estado civil");
        this.estadoCivil = nuevoEstadoCivil;
        alert("Se ha cambiado el estado civil con exito");
    }

    imprimirInformacion() {
        console.log(`Nombre: ${this.nombre} ${this.apellidos}`);
        console.log(`Numero de identificacion: ${this.numId}`);
        console.log(`Estado civil: ${this.estadoCivil}`);
    }
}
// ------ CLASE EMPLEADO --------
class Empleado extends Persona {
    constructor(idEmpleado, nombre, apellidos,numId, estadoCivil, anioEntrada, numDespacho){
        super(nombre, apellidos,numId, estadoCivil);
        this.idEmpleado = idEmpleado;
        this.anioEntrada = anioEntrada;
        this.numDespacho =numDespacho;
    }
    reasignarDespacho(nuevoNumDespacho) {
        let nuevoNumDespacho = prompt("Igrese nuevo numero de despacho");
        this.numDespacho = nuevoNumDespacho;
        alert("Se asigno un numero de despacho");
      }
    
    imprimirInformacion() {
        super.imprimirInformacion();
        console.log(`Año de incorporacion: ${this.anioEntrada}`);
        console.log(`Numero de despacho: ${this.numDespacho}`);
    }
}
// ------- CLASE ESTUDIANTE ------
class Estudiante extends Persona {
    constructor(idEstudiante,nombre, apellidos, numId,estadoCivil,cursoMatriculado, carrera) {
        super(nombre, apellidos, numId,estadoCivil);
        this.idEstudiante = idEstudiante;
        this.cursoMatriculado = cursoMatriculado;
        this.carrera = carrera;
        this.asistencia = {
            presente: false,
            ausente: false,
            tardio: false,
        };
        this.equivalencias = [];
    }

    cambiarCurso(nuevoCurso) {
        let nuevoCurso = prompt("Ingrese nuevo curso");
        this.cursoMatriculado = nuevoCurso;
        alert("Se asigno un nuevo curso");
    }
    
    imprimirInformacion() {
        super.imprimirInformacion();
        console.log(`Curso matriculado: ${this.cursoMatriculado}`);
    }

    darPresente(estado) {
        this.asistencia[estado] = true;
        alert("el alumno esta presente");
    }

    rendirMateria(){
        let nota = prompt("¿Que puntaje final tiene el alumno?");
        if(nota<=6){
            alert("El alumno tiene que rendir la materia");
        }else{
            alert("El alumno no tiene que rendir");
        }
    }

    solicitarEquivalencias(){
    const nuevasEquivalencias = prompt(`Introduce las nuevas equivalencias para ${this.nombre} separadas por comas:`).split(',');
    this.equivalencias = this.equivalencias.concat(nuevasEquivalencias);
    }
    
}
// ------- CLASE PROFESOR -------
class Profesor extends Empleado {
    constructor(idProfesor,idEmpleado, nombre, apellidos,numId, estadoCivil, anioEntrada, numDespacho, departamento) {
        super(idEmpleado, nombre, apellidos,numId, estadoCivil, anioEntrada, numDespacho);
        this.idProfesor = idProfesor;
        this.departamento = departamento;
        this.estudiantes = [];
    }

    cambiarDepartamento(nuevoDepartamento) {
        let nuevoDepartamento = prompt("Ingrese un nuevo departamento");
        this.departamento = nuevoDepartamento;
        alert("Se cambio a un nuevo departamento");
    }
    
    imprimirInformacion() {
        super.imprimirInformacion();
        console.log(`Departamento: ${this.departamento}`);
    }

    agregarEstudiante(estudiante){
        let estudiante = prompt("Ingrese nombre del nuevo estudiante");
        this.estudiantes.push(estudiante);
        alert("El estudiante ha sido agregado con exito");
    }

    tomarAsistencia() {
        this.estudiantes.forEach((estudiante) => {
          const estado = prompt(`Elejir el estado de la asistencia del estudiante ${estudiante.nombre}: Presente, Ausente o Tardío.`);
          estudiante.darPresente(estado.toLowerCase());
        });
    }
}
// ---- CLASE PERSONALSERVICIO -----
class PersonalServicio extends Empleado {
    constructor(idPersonal,idEmpleado, nombre, apellidos,numId, estadoCivil, anioEntrada, numDespacho, area, seccionAsignada) {
        super(idEmpleado, nombre, apellidos,numId, estadoCivil, anioEntrada, numDespacho);
        this.idPersonal =idPersonal;
        this.seccionAsignada = seccionAsignada;
        this.area = area;
        this.aulasSucias = [
            false,
            true,
            true,
            false
          ];
    }

    cambiarSeccion(nuevaSeccion) {
        let nuevaSeccion = prompt("Ingrese la nueva seccion");
        this.seccionAsignada = nuevaSeccion;
        alert("Se ha cambiado la seccion con exito");
    }
    
    imprimirInformacion() {
        super.imprimirInformacion();
        console.log(`Seccion asignada: ${this.seccionAsignada}`);
    }

    actualizarCampus() {
        if (this.area === "Secretaria") {
          alert("El campus ha sido actualizado");
        } else {
          alert("Usted no puede actualizar el campus");
        }
    }

    ordenarAulas() {
        let sector = prompt("¿A que sector del personal de servicio pertenece?");
        if(sector=="porteria"){
            for(let aula of aulasSucias){
                if (aula==true){
                    alert("El aula esta sucia y la limpiara el personal de servicio");
                }else{
                    alert("El aula esta limpia");
                }
            }
        }else{
            alert("Usted no esta autorizado a ordenar aulas");
        }
      }
}

// ------ CLASE CENTRO EDUCATIVO -----
class CentroEducativo {
    constructor() {
      this.personas = [];
    }
  
    darDeAltaPersona(persona) {
        let persona = prompt("Ingrese nueva persona");
      this.personas.push(persona);
      alert("La persona ha sido agregada con exito");

    }
  
    darDeBajaPersona(numeroIdentificacion) {
      const index = this.personas.findIndex(persona => persona.numeroIdentificacion === numeroIdentificacion);
      if (index!== -1) {
        this.personas.splice(index, 1);
      }
    }
  
    imprimirInformacion() {
      this.personas.sort((a, b) => a.apellidos.localeCompare(b.apellidos));
      this.personas.forEach(persona => persona.imprimirInformacion());
    }
  
    buscarPersona(numeroIdentificacion) {
      let  numeroIdentificacion = prompt("Ingrese numero de identificacion");
      alert("La persona es: ");
      return this.personas.find(persona => persona.numeroIdentificacion === numeroIdentificacion);
      
    }
  
    filtrarPersonas(tipoPersona) {
        let tipoPersona = prompt("Ingrese el tipo de persona: estudiante, profesor, personalservicio");
      return this.personas.filter(persona => persona instanceof tipoPersona);
    }

    
  }


//ejemplos
// const personal1 = new PersonalServicio (1234,'Juan','Carlos',2345675,'Barrio las lajas','Personal de Servicio','porteria');
// const estudiante1 = new Estudiante (567,'Maria','Lagos',123456,'Cordoba','estudiante',123123,'programacion','desarrollo full stack');
// const profesor1 = new Profesor (23232,'Alejandro','Arriagada',138829,'salvador','profesor','desarrollo de software','2do año','desarrollo full stack')
//  console.log (estudiante1);
//  profesor1.agregarEstudiante(estudiante1);
//  profesor1.tomarAsistencia()
//  console.log(estudiante1.asistencia);
// console.log (personal1);
// console.log (profesor1);
// estudiante1.solicitarEquivalencias();
// console.log (estudiante1.equivalencias);
// personal1.ordenarAulas();
// const centro = new CentroEducativo();

//  const persona2 = new Empleado("María", "González", "87654321B", "casado", 2020, 123);
//  const persona3 = new Estudiante("Carlos", "Rodríguez", "45678901C", "soltero", "Informática");
//  const persona4 = new Profesor("Ana", "López", "98765432D", "casado", 2015, 456, "Matemáticas");
//  const persona5 = new PersonalServicio("Pedro", "Gómez", "65412378E", "soltero", 2018, 789, "Administración");

//  centro.altaPersona(persona1);
//  centro.altaPersona(persona2);
//  centro.altaPersona(persona3);
//  centro.altaPersona(persona4);
//  centro.altaPersona(persona5);

//  centro.imprimirInformacion();


