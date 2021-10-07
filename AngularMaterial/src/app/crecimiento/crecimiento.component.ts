import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgregarCrecimientoComponent } from './agregar-crecimiento/agregar-crecimiento.component';
import { EditarCrecimientoComponent } from './editar-crecimiento/editar-crecimiento.component';
import { EliminarCrecimientoComponent } from './eliminar-crecimiento/eliminar-crecimiento.component';

@Component({
  selector: 'app-crecimiento',
  templateUrl: './crecimiento.component.html',
  styleUrls: ['./crecimiento.component.css']
})
export class CrecimientoComponent {

  collection = {count:4, data:[] as any}

  constructor(private router:Router,public dialog: MatDialog){}
  ngOnInit(): void {
    for (var i=0;i<this.collection.count;i++){
      this.collection.data.push(
        {
          ID_crecimiento: i,
          ID_planta: 1,
          Nombre: "Tomato",
          Medida: (i*3)+2      
    }      
        )
    }
    throw new Error('Method not implemented.');
  }
;
  agregarcrecimiento(){
    this.dialog.open(AgregarCrecimientoComponent);
  }
  modificarcrecimiento(){
    this.dialog.open(EditarCrecimientoComponent);
  }
  eliminarcrecimiento(item:any):void{
    let dialogRef= this.dialog.open(EliminarCrecimientoComponent);
    dialogRef.afterClosed().subscribe((confirmado: Boolean) => {
      if (confirmado) {
        this.collection.data.pop(item)
      } 
  });
  }
}
