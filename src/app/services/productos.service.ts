import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private af: AngularFirestore ) { }

  getProductos(){
    return this.af.collection('lego').valueChanges();
  }
}
