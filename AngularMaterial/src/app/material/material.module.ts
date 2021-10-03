import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatListModule
]

@NgModule({

  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule
  ],
  exports:[
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule
  ]
})
export class MaterialModule { }
