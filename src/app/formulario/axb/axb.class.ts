export class axb {
  numeroA: number = 0;
  numeroB: number = 0;
  resultado: number = 0;
  i: number = 0;
  calcular(): void {
    for (this.i = 0; this.i < this.numeroB; this.i++) {
      this.resultado += this.numeroA;
    }
  }
}
