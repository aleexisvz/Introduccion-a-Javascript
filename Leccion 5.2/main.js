function stringValido(string, largo) {
   // Limpiamos espacios en blanco al inicio y al final
   string = string.trim();

   // Validar que el string no sea vacío y que sea mayor a "largo"
   if (string.length > largo && string.length != null && string.length != undefined) {
      return true;
   } else {
      return false;
   }
}

function fechaValida(fecha, minimaFecha) {

   if (fecha == null || fecha == undefined){
      return false;
   }

   if (minimaFecha && fecha.getTime() < minimaFecha.getTime()){
      return false;
   }
   
   return true;
}

function eventoValido(evento){

   if (evento == null || evento == undefined){
      return false;
   }

   return (
   stringValido(evento.nombre, 3) &&
   stringValido(evento.descripcion, 10) &&
   fechaValida(evento.fecha, new Date(2018,0,1,0,0,0))
   )
}
   
var evento = {
   nombre: "Evento 1",
   descripcion: "Esto es una descripción",
   fecha: new Date(2018,10,1)
};

console.log(eventoValido(evento))