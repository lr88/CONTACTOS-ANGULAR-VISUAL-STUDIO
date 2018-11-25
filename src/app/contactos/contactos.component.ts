import { Component, OnInit, Input } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactosService, refresh } from '../ContactosServices';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent extends AppComponent implements OnInit {
  
  stringBuscado: string =""
  contactos : Array<Contacto> = []

  ngOnInit() {
    this.contactoService.getContactos().subscribe(
      data => this.contactos = data,
      error => {
        console.log("error", error)
        //this.errors.push(error._body)
      })
  }
  
  setContactoSeleccionado(contacto){
    this.contactoSeleccionado = contacto
  }

  getContactos() {
    return this.contactos
  }
  cambiarFavorito() {
    this.contactoService.cambiarFavorito(this.contactoSeleccionado)
    refresh()
  }
  buscar() {
    this.contactoService.buscar(this.stringBuscado)
    refresh()
  }

}