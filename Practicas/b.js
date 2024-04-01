let materia1 = ["Paco", "juan", "maria", "cofla"];
let materia2 = ["Yunni", "maria", "fer"];
let materia3 = ["Migel", "sofia", "maria", "cofla"];

a = prompt("Dime la materia");

function clases() {
    if (materia1.includes("cofla")) {
        document.write("Esta en la materia 1 Con el profesor/a " + materia1[0] + "<br>")
    }

    if (materia2.includes("cofla")) {
        document.write("Esta en la materia 2 Con el profesor/a " + materia2[0] + "<br>")
    }

    if (materia3.includes("cofla")) {
        document.write("Esta en la materia 3 Con el profesor/a " + materia3[0] + "<br>")
    }
}

function materia(m) {
    if (m == "materia 1") {
        array = materia1.shift();
        document.write("El profesor asignado es " + array + "<br>" + "Y los alumnos son ");

        materia1.forEach((b) => {
            document.write(b + " ");
        })
        document.write("<br>")

    } else if (m == "materia 2") {
        array = materia2.shift();
        document.write("El profesor asignado es " + array + "<br>" + "Y los alumnos son ");

        materia2.forEach((b) => {
            document.write(b + " ");
        })
        document.write("<br>")

    } else if (m == "materia 3") {
        array = materia3.shift();
        document.write("El profesor asignado es " + array + "<br>" + "Y los alumnos son ");

        materia3.forEach((b) => {
            document.write(b + " ");
        })
        document.write("<br>")
    } else {
        document.write("Esa materia no existe <br>");
    }
}



clases();
materia(a);

