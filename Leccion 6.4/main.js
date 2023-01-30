class ElementoInstruccional {
   constructor(identificador, tipo, version) {
      this.identificador = identificador;
      this.tipo = tipo;
      this.version = version;
   }

   filenameGenerator() {
      var filename = 'COMP18S_' + this.identificador + "_" + this.tipo + "_" + this.version + '.midoc';

      return filename;
   }
}

var elemento = new ElementoInstruccional('1', 'Interactiva', 'V1');
var elemento2 = new ElementoInstruccional('2', 'Ejercicio', 'V2');
var elemento3 = new ElementoInstruccional('3', 'Laboratorio', 'V3');

console.log(elemento.filenameGenerator());
console.log(elemento2.filenameGenerator());
console.log(elemento3.filenameGenerator());

