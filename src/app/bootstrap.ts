import { Agenda } from './agenda';
import { Contacto } from './contacto';

export class Bootstrap {

	agenda: Agenda = new Agenda

	cargarDatos() {
		this.agenda.agregarContacto(new Contacto("Rick Grimes","rick@hotmail.com","1523467980"))

		this.agenda.agregarContacto(new Contacto(
			"Walter White"
			, "awdsxc@gmail.com"
			, "1523467981"
		))

		this.agenda.agregarContacto(new Contacto(
			"Barry Allen"
			, "tdhgthjynd@yahoo.com"
			, "1523467983"
		))
		this.agenda.agregarContacto(new Contacto(
			"asdrg Allen"
			, "sgfasdrg@yahoo.com"
			, "1521237983"
		))
		this.agenda.agregarContacto(new Contacto(
			"uuuuuuuuu"
			, "vbnvbnrtn@yahoo.com"
			, "1555467983"
		))
		this.agenda.agregarContacto(new Contacto(
			"rtyrtyrty"
			, "ghjghj@yahoo.com"
			, "152356783"
		))
		this.agenda.agregarContacto(new Contacto(
			"oooooooooo"
			, "erteert@yahoo.com"
			, "1876543983"
		))
		this.agenda.agregarContacto(new Contacto(
			"iuiuiuiuii"
			, "qweqweqwe@yahoo.com"
			, "151237953"
		))
		this.agenda.agregarContacto(new Contacto(
			"jkhljkl"
			, "tyutyu@yahoo.com"
			, "156821846"
		))

	}

}