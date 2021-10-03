import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';


const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatToolbarModule,
  MatTableModule,
  MatCardModule
]

@NgModule({

  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule
  ]
})
export class MaterialModule { }
