import { Component, OnInit } from '@angular/core';
import { Agenda } from '../agenda';
import { Contacto } from '../contacto';
import { Bootstrap } from '../bootstrap';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  bootstrap: Bootstrap = new Bootstrap
  contactoSeleccionado: Contacto
  nombreApellidoNuevo: string
  telefonoNuevo: string
  emailNuevo: string
  stringBuscado: string = ""

  constructor() { }

  ngOnInit() {
  }
  
  getContactos() {
    this.bootstrap.cargarDatos()
    return this.bootstrap.agenda.contactos
    // .filter(cont => cont.nombreApellido.includes(this.stringBuscado) ||
    //   cont.email.includes(this.stringBuscado) || cont.telefono == this.stringBuscado)
  }

  agregarContacto() {
    this.bootstrap.agenda.agregarContacto(new Contacto(
      this.nombreApellidoNuevo,
      this.telefonoNuevo,
      this.emailNuevo
    ))
    this.nombreApellidoNuevo = null
    this.telefonoNuevo = null
    this.emailNuevo = null
  }

  cambiarFavorito() {
    return this.contactoSeleccionado.toggleFavorito
  }

  getEneableCambiarFavorito() {
    return this.contactoSeleccionado !== null
  }

  getEnabledAgregar() {
    return this.validar(this.nombreApellidoNuevo) && this.validar(this.telefonoNuevo) && this.validar(this.emailNuevo)
  }

  validar(unString: string) {
    return unString !== null && unString !== ""
  }

}
