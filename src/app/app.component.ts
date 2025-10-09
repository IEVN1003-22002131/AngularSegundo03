import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formulario/distancia/distancia.component";
import { ZodiacoComponent } from './formulario/zodiaco/zodiaco.component';

@Component({
  selector: 'app-distancias',
  imports: [RouterOutlet, ZodiacoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';
}

