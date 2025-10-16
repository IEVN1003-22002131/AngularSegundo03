import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { axb } from './axb.class'; 

@Component({
  selector: 'app-axb',
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  standalone: true,
  templateUrl: './axb.component.html',
  styleUrl: './axb.component.css'
})
export class AxbComponent implements OnInit{
  objetoCalculadora = new axb();
  formulario!: FormGroup;
  calculoRealizado = false;
  ngOnInit(): void {
    this.formulario = new FormGroup({
      numeroA: new FormControl(0),
      numeroB: new FormControl(0)
    });
  }
  calculos(): void {
    this.objetoCalculadora.numeroA = this.formulario.value.numeroA;
    this.objetoCalculadora.numeroB = this.formulario.value.numeroB;
    this.objetoCalculadora.calcular();
    this.calculoRealizado = true;
  }
}
