import { Component, OnInit, Input } from '@angular/core';
import { ContactosService, refresh } from '../ContactosServices';
import { Contacto } from '../contacto';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-editarContacto',
  templateUrl: './editarContacto.component.html',
  styleUrls: ['./editarContacto.component.css']
})
export class EditarContactoComponent extends AppComponent implements OnInit {
    
  @Input() contactoSeleccionado : Contacto

  ngOnInit() {
    this.contactoService.getContactoSeleccionado().subscribe(
      data => this.contactoSeleccionado = data,
      error => {
        console.log("error", error)
        //this.errors.push(error._body)
      })
  }
   


    editarContacto() {
      this.contactoService.editarContacto(this.contactoSeleccionado)
      this.contactoSeleccionado = null;
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
  
  
