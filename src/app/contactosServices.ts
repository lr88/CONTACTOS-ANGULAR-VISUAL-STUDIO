import { Injectable } from '@angular/core'
import { Http, Response } from "@angular/http"
import { map } from 'rxjs/operators'
import { Contacto } from './contacto';
export const REST_SERVER_URL = 'http://localhost:9000'


@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  constructor(private http: Http) { }

  getContactos() {
    return this.http.get(REST_SERVER_URL + "/contactos").pipe(map(this.convertirAContactos))
  }
  private convertirAContactos(res: Response) {
    return res.json().map(eventoJson => Contacto.fromJson(eventoJson))
  }

  agregarContacto(arg0: Contacto): any {
    throw new Error("Method not implemented.");
  }  

  async cambiarFavorito(contactoSeleccionado: Contacto) {
    const jsonContacto = JSON.parse('{"nombreApellido": "' + 
    String(contactoSeleccionado.nombreApellido) + '" }')
    this.http.put(REST_SERVER_URL + "/cambiarFavorito",jsonContacto).toPromise()
  }

}


export function refresh() {
  location.reload(true);
}