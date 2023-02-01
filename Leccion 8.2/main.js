
// Realiza una gestion entre 2 numeros
function GestionarEstudiante (estudiante, nota1, nota2, Gestion){
   var resGestion = Gestion(nota1, nota2);
   console.log ('Nombre Completo del Estudiante: ' + estudiante + ' ' + resGestion);
}

function Promedio (nota1,nota2){    // Gestion
   return (nota1+nota2)/2;
}

// Comprobamos la funcion
GestionarEstudiante('Jose Carrillo', 18, 20, Promedio);     // Nombre Completo del Estudiante: Jose Carrillo 19