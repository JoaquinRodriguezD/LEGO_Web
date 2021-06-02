import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

public productos: Producto[] = [];

  constructor( private productosService:ProductosService) { }

 ngOnInit(): void{
   this.productosService.getProductos().subscribe(
     (prod: any[]) =>{
       this.productos = prod;
     }
   );

 }

}
