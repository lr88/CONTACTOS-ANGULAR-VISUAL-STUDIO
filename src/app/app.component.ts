import { Component } from '@angular/core';
import { ContactosService } from './ContactosServices';
import { Contacto } from './contacto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contactosangular';
  contactoSeleccionado :Contacto = new Contacto(null,"ddd","","",false)
  constructor(protected contactoService: ContactosService) { }

}
