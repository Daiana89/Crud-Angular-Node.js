import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto/producto.module';
import { Router } from '@angular/router';
import { ToastrService, ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    CommonModule, 
    ToastrModule, 
  ],
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'], // Corrección del typo
})
export class CrearProductoComponent {
  productoForm: FormGroup;
  toastr = inject(ToastrService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  agregarProducto() {
    console.log(this.productoForm);

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    };

    console.log(PRODUCTO);

    this.toastr.success(
      'El producto se ha registrado correctamente',
      'Producto registrado!'
    );
    

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 500); // Redirige después de 0.5 segundos
  }
  
}
