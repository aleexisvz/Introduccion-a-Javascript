var arreglo1 = [1,2,3,4,5];
var arreglo2 = [1,2,4,8];

function retornarDoble(arreglo) {
   return arreglo.map(x => {
      return x * 2;
   });
};

function retornarImpares(arreglo) {
   return arreglo.filter(x => {
      return x % 2 !== 0;
   });
};

console.log(retornarDoble(arreglo1));
console.log(retornarImpares(arreglo1));