import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { PlantasComponent } from './plantas/plantas.component';
import { HomeComponent } from './home/home.component';
import { CrecimientoComponent } from './crecimiento/crecimiento.component';
import { InformeComponent } from './informe/informe.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantasComponent,
    HomeComponent,
    CrecimientoComponent,
    InformeComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
