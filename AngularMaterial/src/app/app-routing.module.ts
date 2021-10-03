import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantasComponent } from './plantas/plantas.component';
import { HomeComponent } from './home/home.component';
import { CrecimientoComponent } from './crecimiento/crecimiento.component';
import { InformeComponent } from './informe/informe.component';
import { InfoComponent } from './info/info.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
