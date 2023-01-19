function limpiarNombreParticipante(nombre, apellido){
    nombre = nombre.trim();
    apellido = apellido.trim();
    var x = apellido.toUpperCase() + ', ' + nombre.toLowerCase() + '.';
    return x;
  }

  function encabezadoEvento(nombreEvento, lugar){
    var x = "Evento: " + nombreEvento + ". Lugar: " + lugar + '.';
    return x;
  }
  
  console.log(limpiarNombreParticipante('      alexis', 'vazquez             '));
  console.log(encabezadoEvento('Lectura de Poemas', 'Sala A'));