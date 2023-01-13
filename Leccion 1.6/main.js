function totalMinutos(horas, minutos){
    return (horas * 60) + minutos;
}

function cantidadRecolectadaSimple(valor, participantes){
    return participantes * valor;
}

function cantidadRecolectada(costoEstudiante, costoAdulto, cantidadEstudiantes, cantidadAdultos){
    return cantidadRecolectadaSimple(costoEstudiante, cantidadEstudiantes) + cantidadRecolectadaSimple(costoAdulto, cantidadAdultos);
  }

console.log(totalMinutos(3, 59));
console.log(cantidadRecolectadaSimple(10, 5))
console.log(cantidadRecolectada(1, 5, 20, 4))
