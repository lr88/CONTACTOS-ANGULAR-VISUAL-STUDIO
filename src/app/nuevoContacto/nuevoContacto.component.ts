import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactosService, refresh } from '../ContactosServices';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nuevoContacto',
  templateUrl: './nuevoContacto.component.html',
  styleUrls: ['./nuevoContacto.component.css']
})
export class NuevoContactoComponent extends AppComponent implements OnInit {
  NuevoNombreApellido: string
  NuevoEmail: string
  NuevoTelefono: string
  favorito: boolean = false
  ngOnInit() {
  }

  agregarContacto() {
    if(this.getEnabledAgregar()){
    this.contactoService.agregarContacto(new Contacto(null,
      this.NuevoNombreApellido,
      this.NuevoTelefono,
      this.NuevoEmail,
      this.favorito
    ))}
    this.NuevoNombreApellido = null
    this.NuevoTelefono = null
    this.NuevoEmail = null
  }
  getEnabledAgregar() {
    return this.validar(this.NuevoNombreApellido) && 
    this.validar(this.NuevoTelefono) && 
    this.validar(this.NuevoEmail)
  }
  validar(unString: string) {
    return unString !== null && unString !== ""
  }
}
