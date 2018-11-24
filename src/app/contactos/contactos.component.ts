import { Component, OnInit, Input } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactosService, refresh } from '../ContactosServices';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  
  contactoSeleccionado : Contacto
  stringBuscado: string =""
  contactos : Array<Contacto> = []

  constructor(private contactoService: ContactosService) { }
  
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

}