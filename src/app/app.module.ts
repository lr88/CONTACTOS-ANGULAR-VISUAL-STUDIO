import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NuevoContactoComponent } from './nuevoContacto/nuevoContacto.component';
import { HttpModule } from '@angular/http'

@NgModule({
   declarations: [
      AppComponent,
      ContactosComponent,
      NuevoContactoComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
