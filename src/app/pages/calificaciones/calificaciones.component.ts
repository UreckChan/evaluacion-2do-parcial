import { Component, OnInit } from '@angular/core';
import { Calificaciones } from '../../models/calificaciones';
import { CalificacionService } from '../../services/calificacion.service';


@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrl: './calificaciones.component.css'
})
export class CalificacionesComponent implements OnInit {

  //propiedades
  calificaciones:Calificaciones[] = [];
  calificacion = new Calificaciones();

  constructor(private calificacionService:CalificacionService){}


  ngOnInit(): void {
    this.calificacionService.getCalificaciones().subscribe(data =>{
      this.calificaciones = data.map(doc => {
        return{
          ...doc.payload.doc.data() as Calificaciones,
          id:doc.payload.doc.id
        };
      })
    })
  }

  //método para insertar un libro
  insertarCalificacion(){
    this.calificacionService.createCalificaciones(this.calificacion);
    this.calificacion = new Calificaciones();
  }

  //método para seleccionar un libro en la tabla
  selectCalificacion(calificacionSeleccionado:Calificaciones){
    this.calificacion = calificacionSeleccionado;
  }

  //método para actualizar un libro
  updateCalificacion(){
    this.calificacionService.updateCalificaciones(this.calificacion);
    this.calificacion = new Calificaciones();
  }

  //método para eliminar un libro
  deleteCalificacion(id:string){
    this.calificacionService.deleteCalificaciones(id);
    this.calificacion = new Calificaciones();
  }

}
