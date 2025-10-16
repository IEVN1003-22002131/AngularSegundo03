export class Zodiaco {
  Nombre: string = '';
  Paterno: string = '';
  Materno: string = '';
  Dia: number = 0;
  Mes: number = 0;
  Anio: number = 0;
  Sexo: string = '';
  NombreCompleto: string = '';
  Edad: number = 0;
  SignoChino: string = '';
  ImagenSigno: string = '';
  fechaHoy: Date = new Date();
  fechaNacimiento: Date = new Date(0);
  diferenciaMeses: number = 0;
  indiceZodiacal: number = 0;
  
  signos: string[] = ['Mono', 'Gallo', 'Perro', 'Cerdo', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra'];
  
  imagenSignoMap: { [key: string]: string } = { 
        'Mono': '/mono.jpg',
        'Gallo': '/gallo.jpg',
        'Perro': '/perro.jpg',
        'Cerdo': '/cerdo.jpg',
        'Rata': '/rata.jpg',
        'Buey': '/buey.jpg',
        'Tigre': '/tigre.jpg',
        'Conejo': '/conejo.jpg',
        'Dragón': '/dragon.jpg',
        'Serpiente': '/serpiente.jpg',
        'Caballo': '/caballo.jpg',
        'Cabra': '/cabra.jpg',
    };
  
  procesar(datosFormulario: any): void {
    this.Nombre = datosFormulario.Nombre;
    this.Paterno = datosFormulario.Paterno;
    this.Materno = datosFormulario.Materno;
    this.Dia = datosFormulario.Dia;
    this.Mes = datosFormulario.Mes;
    this.Anio = datosFormulario.Anio;
    this.Sexo = datosFormulario.Sexo;
    this.calcularNombreCompleto();
    this.calcularEdad();
    this.calcularSignoChino();
  }
  calcularNombreCompleto(): void {
    this.NombreCompleto = this.Nombre + ' ' + this.Paterno + ' ' + this.Materno;
  }

  calcularEdad(): void {
    this.fechaHoy = new Date();
    this.fechaNacimiento = new Date(this.Anio, this.Mes - 1, this.Dia);
    this.Edad = this.fechaHoy.getFullYear() - this.fechaNacimiento.getFullYear();
    this.diferenciaMeses = this.fechaHoy.getMonth() - this.fechaNacimiento.getMonth();
    if (this.diferenciaMeses < 0 || (this.diferenciaMeses === 0 && this.fechaHoy.getDate() < this.fechaNacimiento.getDate())) {
      this.Edad--;
    }
  }
  calcularSignoChino(): void {
    this.indiceZodiacal = (this.Anio - 1992) % 12;
    if (this.indiceZodiacal < 0) {
      this.indiceZodiacal = this.indiceZodiacal + 12;
    }
    this.SignoChino = this.signos[this.indiceZodiacal];
    this.ImagenSigno = this.imagenSignoMap[this.SignoChino] || '';
}
}