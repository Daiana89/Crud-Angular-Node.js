import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { NOMBRE_TOKEN, CATEGORIA_TOKEN, UBICACION_TOKEN, PRECIO_TOKEN } from './tokens';  // Ajusta la ruta de los tokens

@Injectable({
  providedIn: 'root',  // Asegura que el servicio sea inyectable en toda la aplicación
})



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Producto {
  _id?: number;
  nombre: string;
  categoria: string;
  ubicacion: string;
  precio: number;

  // Constructor con inyección de valores
  constructor(
    @Inject(NOMBRE_TOKEN) nombre: string,
    @Inject(CATEGORIA_TOKEN) categoria: string,
    @Inject(UBICACION_TOKEN) ubicacion: string,
    @Inject(PRECIO_TOKEN) precio: number
  ) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.ubicacion = ubicacion;
    this.precio = precio;
  }
}
