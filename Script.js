
let cantidad=prompt("ingrese la cantidad de estudiantes")
for (let i = 0; i < cantidad; i++) {
function Estudiante() {
  this.nombre = '';
  this.documento = '';
  this.telefono = '';
  this.direccion = '';
  this.correo = '';
  this.notas = [];
  
  
  this.datos = function() {
    this.nombre = prompt('Ingrese su nombre');
    this.documento = prompt('Ingrese su documento');
    this.telefono = prompt('Ingrese su teléfono');
    this.direccion = prompt('Ingrese su dirección');
    this.correo = prompt('Ingrese su correo');
   
    for (let i = 0; i < 3; i++) {
      this.notas[i] = parseFloat(prompt(`Ingrese la nota ${i + 1}`));
    }
  }

  
  this.calcularNotaDefinitiva = function() {
    const nota1 = this.notas[0] * 0.25;
    const nota2 = this.notas[1] * 0.35;
    const nota3 = this.notas[2] * 0.4;
    return nota1 + nota2 + nota3;
  }

 
  this.obtenerEstado = function() {
    const notaFinal = this.calcularNotaDefinitiva();
    if (notaFinal >= 4) {
      return "Aprobado";
    } else if (notaFinal >= 3.5) {
      return "Nivelatorio";
    } else {
      return "Reprobado";
    }
  }
}


function registrarEstudiante() {
  const estudiante = new Estudiante();
  estudiante.datos();
  return estudiante;
}


const estudianteRegistro = registrarEstudiante();

console.log(estudianteRegistro.nombre + " está " + estudianteRegistro.obtenerEstado());

}