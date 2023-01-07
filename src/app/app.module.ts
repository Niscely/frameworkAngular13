import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MayusculaComponent } from './mayuscula/mayuscula.component';
import { MonedaComponent } from './moneda/moneda.component';
import { HoraComponent } from './hora/hora.component';

@NgModule({
  declarations: [
    AppComponent,
    MayusculaComponent,
    MonedaComponent,
    HoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
