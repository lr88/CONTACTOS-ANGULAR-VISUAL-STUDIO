import { Component } from '@angular/core';
import { ContactosService } from './ContactosServices';
import { Contacto } from './contacto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contactosangular';
  contactoSeleccionado :Contacto
  constructor(protected contactoService: ContactosService, protected router: Router) { }
 
}
