import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule , Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NuevoContactoComponent } from './nuevoContacto/nuevoContacto.component';
import { HttpModule } from '@angular/http'
import { EditarContactoComponent } from './editarContacto/editarContacto.component';


const routes: Route[] = [
{path: '' , component: ContactosComponent},
{path: 'edicion', component: EditarContactoComponent},
{path: 'nuevo', component: NuevoContactoComponent}
];


@NgModule({
   declarations: [
      AppComponent,
      ContactosComponent,
      NuevoContactoComponent,
      EditarContactoComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
