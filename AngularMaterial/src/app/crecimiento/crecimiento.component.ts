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
  ID_planta: number | undefined;
  Medida: string | undefined;
  Fecha: Date | undefined;

  constructor(private router:Router,public dialog: MatDialog){}
  ngOnInit(): void {
    for (var i=0;i<this.collection.count;i++){
      this.collection.data.push(
        {
          ID_crecimiento: i,
          ID_planta: 1,
          Nombre: "Tomato",
          Medida: (i*3)+2,
          Fecha: "07/10/2021"      
    }      
        )
    }
    throw new Error('Method not implemented.');
  }
;
  agregarcrecimiento(){
    const dialogRef= this.dialog.open(AgregarCrecimientoComponent, {
      data: {ID_planta: this.ID_planta, Medida: this.Medida, Fecha: this.Fecha}});
    
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if(result.ID_planta){
          this.collection.data.push(result)
        }
        
      });
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
