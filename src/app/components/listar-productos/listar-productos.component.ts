import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { error } from 'console';
import { Producto } from '../../models/producto/producto.module';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listar-productos',
  imports: [RouterLink, CommonModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})


export class ListarProductosComponent implements OnInit{
    listProductos: Producto[] = [];



   constructor(private _productoService: ProductoService){}

   ngOnInit(){
    this.obtenerProductos();
   }

   obtenerProductos(){
    this._productoService.getProductos().subscribe( data =>{
      console.log(data);
      this.listProductos = data; 
    }, error =>{
      console.log(error);
    })
    }

}
