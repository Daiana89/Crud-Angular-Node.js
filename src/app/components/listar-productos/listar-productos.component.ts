import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { error } from 'console';

@Component({
  selector: 'app-listar-productos',
  imports: [RouterLink],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})


export class ListarProductosComponent {
   constructor(private _productoService: ProductoService){}

   ngOnInit(){
    this.obtenerProductos();
   }

   obtenerProductos(){
    this._productoService.getProductos().subscribe( data =>{
      console.log(data);
    }, error =>{
      console.log(error);
    })
    }

}
