function materias(nM) {

    let asistencias = [];
    let trabajos = [];
    let promedio = [];

    asistencias[0] = prompt("Ingresa las asistencias de la materia " + nM);

    trabajos[0] = prompt("Ingrese el numero de trabajos entregados en la materia " + nM);

    for (i = 0; i < 4; i++) {
        promedio[i] = parseInt(prompt("Ingresa la nota del trabajo " + (i + 1) + " de la materia " + nM));
    }

    console.groupCollapsed("materia " + nM);
    if (asistencias[0] < 9) {
        console.log("%creprobado por inacistencias", "color:red");
    } else {
        console.log("%caprobado en asistencias", "color:green");
    }
    if (trabajos[0] < 3) {
        console.log("%creprobado por falta de trabajos", "color:red");
    } else {
        console.log("%caprobado en trabajos", "color:green");
    }
    if (((promedio[0] + promedio[1] + promedio[2] + promedio[3]) / 4) < 7) {
        console.log("%creprobado por promedio bajo", "color:red");
    } else {
        console.log("%caprobado en promedio", "color:green");
    }
    console.groupEnd();

}

materias(1);
materias(2);
materias(3);
materias(4);
