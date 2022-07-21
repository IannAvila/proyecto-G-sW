import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './detalles/detalles.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetallesComponent,
    ContenidoComponent,
    FormComponent
  ],
  exports:[
    DetallesComponent,
    ContenidoComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class BodyModule { }
