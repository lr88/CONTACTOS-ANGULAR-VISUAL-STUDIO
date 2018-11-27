export class Contacto {
	id: number
	nombreApellido: string
	email: string
	telefono: string
	favorito: boolean

	constructor(unID :number,
		unNombreApellido: string,
		unEmail: string,
		unTelefono : string,
		favoritismo:boolean) {
		
			this.id = unID
		this.nombreApellido = unNombreApellido
		this.email = unEmail
		this.telefono = unTelefono
		this.favorito = favoritismo
	}

	static fromJson(contactoJSON) {
		var NuevoContacto = new Contacto(
			contactoJSON.id,
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