class celular {
    constructor(color, peso, tamaño, rdp, ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.rdp = rdp;
        this.ram = ram;
        this.info = this.color + " " + this.peso + " " + this.tamaño + " " + this.rdp + "" + this.ram + "<br>";
        this.encendido = true;
    }
    verInfo() {
        document.write(this.info);
    }

    celu() {
        if (this.encendido == false) {
            alert("se encendio");
            this.encendido = true;
        } else {
            alert("ya esta encendido");
        }

        if (this.encendido == true) {
            alert("se apago");
            this.encendido = false;
        } else {
            alert("ya esta apagado");
        }
    }

}

celular1 = new celular("red", "200g", "200cm", "100px", "22gb");

celular1.verInfo();
celular1.celu();


class Avanzado extends celular {
    constructor(color, peso, tamaño, rdp, ram, cl, rf, cx) {
        super(color, peso, tamaño, rdp, ram);
        this.cl = cl;
        this.rf = rf;
        this.cx = cx;
        this.info = this.color + " " + this.peso + " " + this.tamaño + " " + this.rdp + "" + this.ram + " " + this.cl + " " + this.rf + " " + this.cx + "<br>";

    }
    verInfo() {
        document.write(this.info);
    }
}

celularA = new Avanzado("red", "200g", "200cm", "100px", "22gb", "200fps", "rf", "50px");

celularA.verInfo();