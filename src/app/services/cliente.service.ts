import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private firestore:AngularFirestore) { }

  //método que mpermite obtener todos los documentos 
  getClientes(){
    return this.firestore.collection('clientes').snapshotChanges();
  }

  //Método para insertar un documento
  createCliente(cliente:Cliente){
    return this.firestore.collection('clientes').add(Object.assign({},cliente));
  }

  //método para actualizar un docuento existente
  updateCliente(cliente:Cliente){
    this.firestore.doc('clientes/'+cliente.id).update(cliente);
  }

  //método para eliminar un documento
  deleteCliente(clienteId:string){
    this.firestore.doc('clientes/'+clienteId).delete();
  }


}