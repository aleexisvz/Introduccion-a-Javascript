function fechaParaHumanos(fecha, fechaRerencia){
   var t1 = fecha.getTime() / 1000; // segundos
   var t2 = fechaRerencia.getTime() / 1000; // segundos
   var diferencia;

   diferencia = Math.round(t2-t1);
   
   if (diferencia < 1) {
       return "hace 1 segundo"
   }
   
   if (diferencia < 60) {
       return `hace ${diferencia} segundos`
   }
   
   diferencia = Math.round(diferencia/60);
   
   if (diferencia < 1) {
       return "hace 1 minuto"
   }
}