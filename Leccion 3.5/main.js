function saludo(nombre, apellido, genero, evento, minutosQueFaltan) {
    var x = "";

    if (genero == "M") {
        x += "Bienvenido ";
    } else if (genero == "F"){
        x += "Bienvenida ";
    }

    x += nombre.trim();
    x += " " + apellido.trim();

    x += " recuerda"

    if (minutosQueFaltan < 60 * 24) {
        x += " hoy el evento (" + evento.trim() + ").";
    } else if (minutosQueFaltan < 60 * 24 * 2) {
        x += " mañana el evento (" + evento.trim() + ").";
    } else {
        x += " pronto el evento (" + evento.trim() + ").";
    }

    return x;
}

console.log(saludo("    Alexis", "Vazquez      ", "M", "Pelicula", 2900));