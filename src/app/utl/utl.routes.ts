import {Routes} from "@angular/router";
export default[
    {
        path:"agregar",
        loadComponent:()=>import('./agregar/agregar.component').then(c=>c.AgregarComponent)
    },
    {
        path:"alumnos",
        loadComponent:()=>import('./alumnos/alumnos.component').then(c=>c.AlumnosComponent)
    },
    {
        path:"editar",
        loadComponent:()=>import('./editar/editar.component').then(c=>c.EditarComponent)
    },
    {
        path:"eliminar",
        loadComponent:()=>import('./eliminar/eliminar.component').then(c=>c.EliminarComponent)
    },
]as Routes;