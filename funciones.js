function jugar(eleccionJugador) {
    const opciones = ["Piedra", "Papel", "Tijeras"];
    const eleccionPC = opciones[Math.floor(Math.random() * 3)];

    document.getElementById("elecciones").innerHTML =
        "Tú elegiste: <b>" + eleccionJugador + "</b><br>La computadora eligió: <b>" + eleccionPC + "</b>";

    let resultado = "";

    if (eleccionJugador === eleccionPC) {
        resultado = "Empate";
    } 
    else if (
        (eleccionJugador === "Piedra" && eleccionPC === "Tijeras") ||
        (eleccionJugador === "Papel" && eleccionPC === "Piedra") ||
        (eleccionJugador === "Tijeras" && eleccionPC === "Papel")
    ) {
        resultado = "¡Ganaste! 🎉";
    } 
    else {
        resultado = "Perdiste 😢";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
