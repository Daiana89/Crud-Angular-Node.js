import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { error } from 'console';
import { Producto } from '../../models/producto/producto.module';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';



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
      Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esta acción.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Llama al servicio para eliminar el producto
          this._productoService.eliminarProducto(id).subscribe(
            data => {
              Swal.fire(
                '¡Eliminado!',
                'El producto ha sido eliminado correctamente.',
                'success'
              );
              // Refresca la lista de productos
              this.obtenerProductos();
            },
            error => {
              console.error(error);
              Swal.fire(
                'Error',
                'Hubo un problema al eliminar el producto.',
                'error'
              );
            }
          );
        }
      });
    }
    

}
