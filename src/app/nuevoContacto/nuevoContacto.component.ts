import { Component, OnInit, Input } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactosService } from '../ContactosServices';

@Component({
  selector: 'app-nuevoContacto',
  templateUrl: './nuevoContacto.component.html',
  styleUrls: ['./nuevoContacto.component.css']
})
export class NuevoContactoComponent implements OnInit {
  NuevoNombreApellido: string
	NuevoEmail: string
	NuevoTelefono: string
	favorito: boolean = false

  constructor(private contactoService: ContactosService) { }

  ngOnInit() {
  }

  agregarContacto() {
    this.contactoService.agregarContacto(new Contacto(
      this.NuevoNombreApellido,
      this.NuevoTelefono,
      this.NuevoEmail
    ))
      this.NuevoNombreApellido= null
      this.NuevoTelefono= null
      this.NuevoEmail= null
  }
  // getEnabledAgregar() {
  //   return this.validar(this.NuevoNombreApellido) && 
  //   this.validar(this.NuevoTelefono) && 
  //   this.validar(this.NuevoEmail)
  // }
  // validar(unString: string) {
  //   return unString !== null && unString !== ""
  // }
}
