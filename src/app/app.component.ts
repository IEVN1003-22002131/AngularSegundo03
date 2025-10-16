import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formulario/distancia/distancia.component";
import { ZodiacoComponent } from './formulario/zodiaco/zodiaco.component';
import { AxbComponent } from './formulario/axb/axb.component';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-distancias',
  imports: [RouterOutlet, ZodiacoComponent, DistanciaComponent, AxbComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';
  ngOnInit(): void {
    initFlowbite();
  }
}

