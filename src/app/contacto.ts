export class Contacto {

	nombreApellido: string
	email: string
	telefono: string
	favorito: boolean

	constructor(unNombreApellido: string, unEmail: string,unTelefono : string,favoritismo:boolean) {
		this.nombreApellido = unNombreApellido
		this.email = unEmail
		this.telefono = unTelefono
		this.favorito = favoritismo
	}

	static fromJson(contactoJSON) {
		var NuevoContacto = new Contacto(
			contactoJSON.nombreApellido,
			contactoJSON.email,
			contactoJSON.telefono,
			contactoJSON.favorito,
			)
		return NuevoContacto
	  }

	// getEnabledEditar() {
	// 	return this.validar(this.nombreApellido) && this.validar(this.telefono) && this.validar(this.email)
	// }

	// validar(unString: string): boolean {
	// 	return unString !== null && unString !== ""
	// }

}