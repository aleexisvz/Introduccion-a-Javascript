let canciones = ["Franky Rizardo - The Floor is Lava", "KoRn - Blind", "Rise Against - Savior", 
"Rise Against - Swing Life Away", "Rise Against - Hero of War", "Rise Against - Prayer of the Refugee"];

function imprimirCanciones() {
   console.log("Mi lista de canciones preferidas: ");
    for (let i = 0; i < canciones.length; i++) {
      console.log(canciones[i] + " ");
    }
}

imprimirCanciones(canciones);