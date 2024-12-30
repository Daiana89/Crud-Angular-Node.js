import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { error } from 'console';
import { Producto } from '../../models/producto/producto.module';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-listar-productos',
  imports: [RouterLink, CommonModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})


export class ListarProductosComponent implements OnInit{
    listProductos: Producto[] = [];



   constructor(private _productoService: ProductoService,
    private toastr: ToastrService
   ){}

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

    eliminarProducto(id: any) {
      const confirmacion = window.confirm('¿Está seguro de que desea eliminar este producto?');
    
      if (confirmacion) {
        this._productoService.eliminarProducto(id).subscribe(
          data => {
            this.toastr.error('El producto ha sido eliminado con éxito', 'Producto eliminado');
            this.obtenerProductos();
          },
          error => {
            console.log(error);
          }
        );
      }
    }
    

}
