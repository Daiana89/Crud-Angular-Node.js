import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule } from '@angular/forms';  
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-root',
 imports: [ 
    RouterOutlet,
    CommonModule,          
    ReactiveFormsModule,   
    

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Crud-Angular';
}
