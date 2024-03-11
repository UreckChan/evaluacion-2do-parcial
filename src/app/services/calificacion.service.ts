import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Calificaciones } from '../models/calificaciones';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  constructor(private firestore:AngularFirestore) { }

  //método que mpermite obtener todos los documentos 
  getCalificaciones(){
    return this.firestore.collection('calificaciones').snapshotChanges();
  }

  //Método para insertar un documento
  createCalificaciones(calificacion:Calificaciones){
    return this.firestore.collection('calificaciones').add(Object.assign({},calificacion));
  }

  //método para actualizar un docuento existente
  updateCalificaciones(calificacion:Calificaciones){
    this.firestore.doc('calificaciones/'+calificacion.id).update(calificacion);
  }

  //método para eliminar un documento
  deleteCalificaciones(calificacionId:string){
    this.firestore.doc('calificaciones/'+ calificacionId).delete();
  }

}




