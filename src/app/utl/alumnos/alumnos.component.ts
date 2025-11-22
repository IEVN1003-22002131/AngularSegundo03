import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlumnosFilterPipe } from '../alumnos-filter.pipe';
import { CommonModule } from '@angular/common';
import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos';
 
@Component({
  selector: 'app-alumnos',
  imports: [ FormsModule, RouterLink, AlumnosFilterPipe, CommonModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export  class AlumnosComponent{
 
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  alumnoTitle!:string;
  dataSource:any=[];
 
  constructor(public alumnosUtl:ProyectoapiService){}
 
  alumnosIric:AlumnosUtl[]=[
    {
      matricula:1234,
      nombre:'Pedro',
      apaterno:'Lopez',
      amaterno:'Muñoz',
      correo:'pedro@gmail.com'
    },
  ]
  
  ngOnInit():void {
    this.alumnosUtl.getAlumnos().subscribe(
      {
        next:(response:any) =>{
        this.dataSource=response.alumnos;
      },
      error: error=>console.log(error)
    }
    )
  }

  
 
}