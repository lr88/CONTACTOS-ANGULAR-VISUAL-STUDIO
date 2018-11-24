import { Contacto } from "./contacto";


export class Agenda {
	
	 contactos : Array<Contacto> = []
	
	agregarContacto( contacto : Contacto): void {
		this.contactos.push(contacto)
	}

	
}
