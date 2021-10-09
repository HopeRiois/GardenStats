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
import { AgregarPlantaComponent } from './plantas/agregar-planta/agregar-planta.component';
import { EliminarPlantaComponent } from './plantas/eliminar-planta/eliminar-planta.component';
import { EditarPlantaComponent } from './plantas/editar-planta/editar-planta.component';
import { AgregarCrecimientoComponent } from './crecimiento/agregar-crecimiento/agregar-crecimiento.component';
import { EditarCrecimientoComponent } from './crecimiento/editar-crecimiento/editar-crecimiento.component';
import { EliminarCrecimientoComponent } from './crecimiento/eliminar-crecimiento/eliminar-crecimiento.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PlantasComponent,
    HomeComponent,
    CrecimientoComponent,
    InformeComponent,
    InfoComponent,
    AgregarPlantaComponent,
    EliminarPlantaComponent,
    EditarPlantaComponent,
    AgregarCrecimientoComponent,
    EditarCrecimientoComponent,
    EliminarCrecimientoComponent,
  ],
  entryComponents: [
    EliminarPlantaComponent,
    EliminarCrecimientoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
