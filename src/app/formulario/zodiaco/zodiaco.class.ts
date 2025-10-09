export class Zodiaco {
    nombre: string;
    apaterno: string;
    amaterno: string;
    dia: number;
    mes: number;
    anio: number;
    sexo: string;

    edad: number | null= null;
    signoChino: string= '';
    imagenSigno: string= '';

    private signos= [
        'Mono', 'Gallo', 'Perro', 'Cerdo', 'Rata', 'Buey',
        'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra'
    ];

    constructor(data: any) {
        this.nombre= data.nombre;
        this.apaterno= data.apaterno;
        this.amaterno= data.amaterno;
        this.dia= data.dia;
        this.mes= data.mes;
        this.anio= data.anio;
        this.sexo= data.sexo;
    }
    calcularEdad(): number {
        const fechaActual= new Date();
        const fechaNacimiento= new Date(this.anio, this.mes-1, this.dia);
        let edadCalculada= fechaActual.getFullYear()-fechaNacimiento.getFullYear();
        const cumpleaniosEsteAnio = new Date(fechaActual.getFullYear(), this.mes-1, this.dia);
        if (fechaActual<cumpleaniosEsteAnio) {
            edadCalculada--;
        }
        this.edad= edadCalculada;
        return edadCalculada;
    }
    determinarSignoChino(): string {
        const anioBase= 1920;
        const indice= (this.anio - anioBase)%12;
        this.signoChino= this.signos[indice<0 ? indice+12 : indice];
        this.imagenSigno= this.signoChino.toLowerCase();
        return this.signoChino;
    }
    procesarDatos() {
        this.calcularEdad();
        this.determinarSignoChino();
    }
    getNombreCompleto(): string {
        return `${this.nombre} ${this.apaterno} ${this.amaterno}`;
    }
}