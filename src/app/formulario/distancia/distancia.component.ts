import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } 
from '@angular/forms';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {

  formulario!:FormGroup;
  resultado!:number;
  constructor() { }
  ngOnInit(): void{
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl('')
    });
  }
    multNumeros(): void{
    const numero1=this.formulario.get('numero1')?.value;
    const numero2=this.formulario.get('numero2')?.value;
    this.resultado=numero1*numero2;

  }
}
