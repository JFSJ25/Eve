materia1 = ["a", "b", "C", "d", "e"];
materia2 = ["g", "h", "i", "j"];
materia3 = ["k", "l", "m"];

function pregunta() {
    materia = prompt("¿En que materia te quieres inscribir?");

    if (materia == "materia 1") {
        if (materia1.length < 5) {
            materia1.push("cofla");
            document.write("Te has inscrito");
        } else {
            document.write("Materia llena");
        }
    } else if (materia == "materia 2") {
        if (materia2.length < 5) {
            materia2.push("cofla");
            document.write("Te has inscrito");
        } else {
            document.write("Materia llena");
        }
    } else if (materia == "materia 3") {
        if (materia3.length < 5) {
            materia3.push("cofla");
            document.write("Te has inscrito");
        } else {
            document.write("Materia llena");
        }
    }
}

pregunta();

document.write("<br>");

materia1.forEach(element => {
    document.write(element + " ");
});

document.write("<br>");

materia2.forEach(element => {
    document.write(element + " ");
});

document.write("<br>");

materia3.forEach(element => {
    document.write(element + " ");
});