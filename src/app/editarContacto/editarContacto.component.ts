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
    
  errorMessage

  ngOnInit() {
    this.contactoService.getContactoSeleccionado().subscribe(
      data => this.contactoSeleccionado = data,
      error => {
        console.log("error", error)
      })
  }
    editarContacto() {
      if(this.getEnabledAgregar()){
      this.contactoService.editarContacto(this.contactoSeleccionado)
      this.errorMessage = null
      this.router.navigate(['/'])
    } 
    else{
      this.errorMessage = "Todos Los Campos tienen que estar completos"
    }
  }
    getEnabledAgregar() {
      return this.validar(this.contactoSeleccionado.nombreApellido) && 
      this.validar(this.contactoSeleccionado.email) && 
      this.validar(this.contactoSeleccionado.telefono)
    }
    validar(unString: string) {
      return unString != null && unString != ""
    }
  }
  
  
