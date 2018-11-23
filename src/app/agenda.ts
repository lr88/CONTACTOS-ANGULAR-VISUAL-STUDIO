import { Contacto } from "./contacto";


export class Agenda {
	
	 contactos : Array<Contacto> 
	
	agregarContacto( contacto : Contacto) {
		this.contactos.push(contacto)
	}
	
}
