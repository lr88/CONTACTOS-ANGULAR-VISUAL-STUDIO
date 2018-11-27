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
  errorMessage

  ngOnInit() {
    this.contactoService.getContactos().subscribe(
      data => this.contactos = data,
      error => {
        console.log("error", error)
        //this.errors.push(error._body)
      })
  }

  setContactoSeleccionado(contacto){
    this.contactoService.contactoSeleccionado(contacto)
    this.contactoSeleccionado = contacto
    this.errorMessage = null
  }

  getContactos() {
    return this.contactos
  }
  cambiarFavorito() {
    if(this.contactoSeleccionado != null){
    this.contactoService.cambiarFavorito()
    refresh()
    this.contactoSeleccionado == null
    this.errorMessage = null
  }
  else{
    this.errorMessage = "No seleccionaste ningun contacto"
  }
}


limpiarBusqueda(){
  this.stringBuscado = ""
  this.buscar()
}
  buscar() {
    this.contactoService.buscar(this.stringBuscado)
    refresh()
  }

  irAPantallaEdicion(){
    if(this.contactoSeleccionado != null){
    this.contactoService.editarContacto(this.contactoSeleccionado)
    this.router.navigate(['/edicion'])
    this.errorMessage = null
  }  
  else{
    this.errorMessage = "No seleccionaste ningun contacto"
  }
}
   
}