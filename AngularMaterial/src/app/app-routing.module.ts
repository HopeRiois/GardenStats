import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantasComponent } from './plantas/plantas.component';
import { HomeComponent } from './home/home.component';
import { CrecimientoComponent } from './crecimiento/crecimiento.component';
import { InformeComponent } from './informe/informe.component';
import { InfoComponent } from './info/info.component';
import { AgregarPlantaComponent } from './plantas/agregar-planta/agregar-planta.component';
import { EditarPlantaComponent } from './plantas/editar-planta/editar-planta.component';
import { EliminarPlantaComponent } from './plantas/eliminar-planta/eliminar-planta.component';
import { EditarCrecimientoComponent } from './crecimiento/editar-crecimiento/editar-crecimiento.component';
import { EliminarCrecimientoComponent } from './crecimiento/eliminar-crecimiento/eliminar-crecimiento.component';
import { AgregarCrecimientoComponent } from './crecimiento/agregar-crecimiento/agregar-crecimiento.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',component:HomeComponent
  },
  {
    path: 'plantas',component:PlantasComponent
  },
  {
    path: 'crecimiento',component:CrecimientoComponent
  },
  {
    path: 'informe',component:InformeComponent
  },
  {
    path: 'info',component:InfoComponent
  },
  {
    path: 'agregarplanta',component:AgregarPlantaComponent
  },
  {
    path: 'editarplanta',component:EditarPlantaComponent
  },
  {
    path: 'eliminarplanta',component:EliminarPlantaComponent
  },
  {
    path: 'agregarcrecimiento',component:AgregarCrecimientoComponent
  },
  {
    path: 'editarcrecimiento',component:EditarCrecimientoComponent
  },
  {
    path: 'eliminarcrecimiento',component:EliminarCrecimientoComponent
  },
  {
    path: 'login',component:LoginComponent
  },

  {
    path: "", redirectTo: "/home", pathMatch: "full"
  }, 
  {
    path:"**", redirectTo: "/home"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
