import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Zodiaco } from './zodiaco.class';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})

export class ZodiacoComponent implements OnInit{
    formulario: FormGroup;
    resultado: Zodiaco | null= null;
    mostrarResultado: boolean= false;

    imagenSignoMap: { [key: string]: string } = {
        'Mono': 'mono.jpg',
        'Gallo': 'gallo.jpg',
        'Perro': 'perro.jpg',
        'Cerdo': 'cerdo.jpg',
        'Rata': 'rata.jpg',
        'Buey': 'buey.jpg',
        'Tigre': 'tigre.jpg',
        'Conejo': 'conejo.jpg',
        'Dragón': 'dragon.jpg',
        'Serpiente': 'serpiente.jpg',
        'Caballo': 'caballo.jpg',
        'Cabra': 'cabra.jpg',
    };

    constructor(private fb: FormBuilder) {
        this.formulario = this.fb.group({
            nombre: ['Nombre', Validators.required],
            apaterno: ['Apellido Paterno', Validators.required],
            amaterno: ['Apellido Materno', Validators.required],
            dia: [0, [Validators.required, Validators.min(1), Validators.max(31)]],
            mes: [0, [Validators.required, Validators.min(1), Validators.max(12)]],
            anio: [0, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
            sexo: [Validators.required]
        });
    }
    ngOnInit(): void {
    }
    imprimirInformacion() {
        this.mostrarResultado = false;

        if (this.formulario.valid) {
            const datosFormulario= this.formulario.value;
            const logicaZodiaco= new Zodiaco(datosFormulario);
            logicaZodiaco.procesarDatos();
            this.resultado= logicaZodiaco;
            if (this.resultado.signoChino) {
                 this.resultado.imagenSigno = this.imagenSignoMap[this.resultado.signoChino];
            }
            this.mostrarResultado= true;
        } else {
            alert('Datos incompletos');
            this.formulario.markAllAsTouched();
        }
    }
}
