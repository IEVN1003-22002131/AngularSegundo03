import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'; 
import { Zodiaco } from './zodiaco.class'

@Component({
  selector: 'app-zodiaco',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css', 
})

export class ZodiacoComponent implements OnInit {
  zodiacoForm!: FormGroup; 
  procesoZodiaco = new Zodiaco(); 
  mostrarResultado: boolean = false; 
  ngOnInit(): void {
    this.zodiacoForm = new FormGroup({
      Nombre: new FormControl(''),
      Paterno: new FormControl(''),
      Materno: new FormControl(''),
      Dia: new FormControl(0), 
      Mes: new FormControl(0), 
      Anio: new FormControl(0), 
      Sexo: new FormControl('Masculino'), 
    });
  }
  imprimirInformacion(): void {
    const datos = this.zodiacoForm.value;
    this.procesoZodiaco.Nombre = datos.Nombre;
    this.procesoZodiaco.Paterno = datos.Paterno;
    this.procesoZodiaco.Materno = datos.Materno;
    this.procesoZodiaco.Dia = datos.Dia;
    this.procesoZodiaco.Mes = datos.Mes;
    this.procesoZodiaco.Anio = datos.Anio;
    this.procesoZodiaco.Sexo = datos.Sexo;
    this.procesoZodiaco.procesar(datos);    
    this.mostrarResultado = true;
  }
}