

var donaciones = [5,15,22,25,30,52,5,1,0];

// Esta funcion debe retornar el monto mas bajo de la lista de montos
function minimo(montos) {
   var min = montos[0];

   for (var i = 0; i < montos.length; i++) {
      /* Si el monto actual es menor que el minimo actual, 
      entonces el monto actual es el nuevo minimo*/
      if (montos[i] < min) {
         min = montos[i];
      }
   }

   return min;
}

// Esta funcion debe retornar el monto mas alto de la lista de montos
function maximo(montos) {
   var max = montos[0];

   for (var i = 0; i < montos.length; i++) {
      /* Si el monto actual es mayor que el maximo actual, 
      entonces el monto actual es el nuevo maximo*/
      if (montos[i] > max) {
         max = montos[i];
      }
   }

   return max;
}

// Esta funcion debe retornar el promedio de los montos entre el minimo y el maximo (excluyendolos)
function promedio(min, max,donaciones) {
   var sum = 0;
   var cantidad = 0;

   for (monto of donaciones){
       if (monto > min && monto < max){
           sum += monto;
           cantidad++;
       }
   }

   return sum / cantidad;
 }



console.log("El monto mas bajo es: " + minimo(donaciones));
console.log("El monto mas alto es: " + maximo(donaciones));
console.log("El promedio de donaciones es: " + promedio(minimo(donaciones), maximo(donaciones), donaciones));