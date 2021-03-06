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
    return this.http.get(REST_SERVER_URL + "/contactos").pipe(map(this.convertirAContactos));
  }
  getContactoSeleccionado(): any {
    return this.http.get(REST_SERVER_URL + "/contactoSeleccionado").pipe(map(res => this.contactoAsJson(res.json())));
  }

  private contactoAsJson(usuarioJSON): Contacto {
    return Contacto.fromJson(usuarioJSON);
  }

  private convertirAContactos(res: Response) {
    return res.json().map(eventoJson => Contacto.fromJson(eventoJson))
  }

  agregarContacto(contacto: Contacto) {
    const jsonContacto = JSON.stringify(contacto)
    this.http.put(REST_SERVER_URL + "/agregarContacto", jsonContacto).toPromise()
  }
  
  async cambiarFavorito() {
    this.http.put(REST_SERVER_URL + "/cambiarFavorito","").toPromise()
  }
  
  contactoSeleccionado(contactoSeleccionado: Contacto): any {
    const jsonContacto = JSON.parse('{"id": "' +
    String(contactoSeleccionado.id) + '" }')
    this.http.put(REST_SERVER_URL + "/contactoSeleccionado", jsonContacto).toPromise()
  }
  async buscar(stringBuscado: string) {
    const jsonBuscar = JSON.parse('{"stringBuscado": "' +
    String(stringBuscado) + '" }')
    this.http.put(REST_SERVER_URL + "/buscar", jsonBuscar).toPromise()
  }

  editarContacto(contacto: Contacto): any {
    const jsonContacto = JSON.stringify(contacto)
    this.http.put(REST_SERVER_URL + "/editarContacto", jsonContacto).toPromise()
  }
}

export function refresh() {
  location.reload(true);
}