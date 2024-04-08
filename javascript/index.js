//Creamos las clases Persona, Estudiante, Profesor y PersonalServicio
class Persona {
    constructor( nombre, apellido, dni, direccion, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
        this.dni = dni;
        this.direccion = direccion;
    }
}

class Estudiante extends Persona {
    constructor(idEstudiante,nombre,apellido,dni,direccion,rol, legajo, curso, carrera) {
        super(nombre,apellido,dni,direccion,rol);
        this.idEstudiante = idEstudiante;
        this.legajo = legajo;
        this.curso = curso;
        this.carrera = carrera;
        this.asistencia = {
            presente: false,
            ausente: false,
            tardio: false,
        };
        this.equivalencias = [];
    }
    darPresente(estado) {
        this.asistencia[estado] = true;
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

class Profesor extends Persona {
    constructor(idProfesor,nombre,apellido, dni, direccion,rol, asignatura, nivel, carrera) {
        super( nombre, apellido, dni,direccion, rol);
        this.idProfesor = idProfesor;
        this.asignatura = asignatura;
        this.nivel = nivel;
        this.carrera = carrera;
        this.estudiantes = [];
    }
    agregarEstudiante(estudiante){
        this.estudiantes.push(estudiante);
    }
    tomarAsistencia() {
        this.estudiantes.forEach((estudiante) => {
          const estado = prompt(`Elejir el estado de la asistencia del estudiante ${estudiante.nombre}: Presente, Ausente o Tardío.`);
          estudiante.darPresente(estado.toLowerCase());
        });
      }
}

class PersonalServicio extends Persona {
    constructor(idPersonal,nombre,apellido, dni, direccion,rol, area) {
        super(nombre,apellido, dni, direccion,rol);
        this.idPersonal =idPersonal;
        this.area = area;
        this.aulasSucias = [
            false,
            true,
            true,
            false
          ];
    }
    actualizarCampus() {
        if (this.area === "Secretaria") {
          console.log("El campus ha sido actualizado");
        } else {
          console.log("Usted no puede actualizar el campus");
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
//ejemplos
const personal1 = new PersonalServicio (1234,'Juan','Carlos',2345675,'Barrio las lajas','Personal de Servicio','porteria');
const estudiante1 = new Estudiante (567,'Maria','Lagos',123456,'Cordoba','estudiante',123123,'programacion','desarrollo full stack');
const profesor1 = new Profesor (23232,'Alejandro','Arriagada',138829,'salvador','profesor','desarrollo de software','2do año','desarrollo full stack')
// console.log (estudiante1);
// profesor1.agregarEstudiante(estudiante1);
// profesor1.tomarAsistencia()
// console.log(estudiante1.asistencia);
//console.log (personal1);
//console.log (profesor1);
//estudiante1.solicitarEquivalencias();
//console.log (estudiante1.equivalencias);
//personal1.ordenarAulas();
