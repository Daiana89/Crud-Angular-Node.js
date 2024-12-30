import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto/producto.module';
import { Router } from '@angular/router';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ProductoService } from '../../services/producto.service';
import { error } from 'console';

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
  titulo = 'Crear producto';
  id: string | null;

  constructor(private fb: FormBuilder,
     private router: Router,
     private _productoService: ProductoService,
     private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void{
    this.esEditar();
  }

  agregarProducto() {
    console.log(this.productoForm);
  
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    };
  
    if (this.id !== null) {
      // Editamos producto
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(
        data => {
          this.toastr.info(
            'El producto se ha actualizado correctamente',
            'Producto Actualizado!'
          );
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 500); // Redirige después de 0.5 segundos
        },
        error => {
          console.log(error);
          this.productoForm.reset();
        }
      );
    } else {
      // Agregamos producto
      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(
        data => {
          this.toastr.success(
            'El producto se ha registrado correctamente',
            'Producto Registrado!'
          );
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 500); // Redirige después de 0.5 segundos
        },
        error => {
          console.log(error);
          this.productoForm.reset();
        }
      );
    }
  }
  
  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Producto';
      this._productoService.obetenerProducto(this.id).subscribe(
        data => {
          this.productoForm.setValue({
            producto: data.nombre,
            categoria: data.categoria,
            ubicacion: data.ubicacion,
            precio: data.precio,
          });
        },
        error => {
          console.error('Error al obtener el producto:', error);
        }
      );
    }
  }
  
  
}
