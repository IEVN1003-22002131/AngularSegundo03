import { Component, OnInit } from '@angular/core';
import { Distancia } from './distancias.class';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent implements OnInit{
  formulario!: FormGroup
  objetodistancia = new Distancia()
  resultado: number = 0
  ngOnInit() {
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl('')
    })
  }
  calcularDistancia() {
    this.objetodistancia.x1 = Number(this.formulario.value.x1)
    this.objetodistancia.y1 = Number(this.formulario.value.y1)
    this.objetodistancia.x2 = Number(this.formulario.value.x2)
    this.objetodistancia.y2 = Number(this.formulario.value.y2)
    this.objetodistancia.calcular()
    this.resultado = this.objetodistancia.resultado
  }
}
