import { InjectionToken } from '@angular/core';

// Definir un token para cada valor primitivo
export const NOMBRE_TOKEN = new InjectionToken<string>('Nombre del Producto');
export const CATEGORIA_TOKEN = new InjectionToken<string>('Categoría del Producto');
export const UBICACION_TOKEN = new InjectionToken<string>('Ubicación del Producto');
export const PRECIO_TOKEN = new InjectionToken<number>('Precio del Producto');
