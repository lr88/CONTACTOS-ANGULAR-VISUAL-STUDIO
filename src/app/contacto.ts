export class Contacto {

	nombreApellido: string
	email: string
	telefono: string
	favorito: boolean = false

	constructor(unNombreApellido: string, unEmail: string,unTelefono : string) {
		this.nombreApellido = unNombreApellido
		this.email = unEmail
		this.telefono = unTelefono
	}

	toggleFavorito() {
		this.favorito = !this.favorito
	}

	getEnabledEditar() {
		return this.validar(this.nombreApellido) && this.validar(this.telefono) && this.validar(this.email)
	}

	validar(unString: string): boolean {
		return unString !== null && unString !== ""
	}

}