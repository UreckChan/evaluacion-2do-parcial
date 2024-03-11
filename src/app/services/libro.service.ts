import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private firestore:AngularFirestore) { }

  //método que mpermite obtener todos los documentos 
  getLibros(){
    return this.firestore.collection('libros').snapshotChanges();
  }

  //Método para insertar un documento
  createLibro(libro:Libro){
    return this.firestore.collection('libros').add(Object.assign({},libro));
  }

  //método para actualizar un docuento existente
  updateLibro(libro:Libro){
    this.firestore.doc('libros/'+libro.id).update(libro);
  }

  //método para eliminar un documento
  deleteLibro(libroId:string){
    this.firestore.doc('libros/'+libroId).delete();
  }


}