import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  imports: [RouterLink],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})


export class ListarProductosComponent {
  debug() {
    console.log('El botón fue clicado');
    console.log('Intentando redirigir a /crear-producto');
  }
}
