import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgregarPlantaComponent } from './agregar-planta/agregar-planta.component';
import { EditarPlantaComponent } from './editar-planta/editar-planta.component';
import { EliminarPlantaComponent } from './eliminar-planta/eliminar-planta.component';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})

export class PlantasComponent implements OnInit{

  collection = {count:3, data:[] as any}

  constructor(private router:Router,public dialog: MatDialog) {}

  ngOnInit(): void {
    for (var i=0;i<this.collection.count;i++){
      this.collection.data.push(
        {
          ID_planta: i,
          Nombre: "nombre",
          Regar: "No",
          Luz: "No"      
    }      
        )
    }
    throw new Error('Method not implemented.');
  }
;
  agregarplanta(){
    let dialogRef= this.dialog.open(AgregarPlantaComponent);
  }
  modificarplanta(){
    let dialogRef= this.dialog.open(EditarPlantaComponent);
  }
  eliminarplanta(item:any):void{
    let dialogRef= this.dialog.open(EliminarPlantaComponent);
    dialogRef.afterClosed().subscribe((confirmado: Boolean) => {
      if (confirmado) {
        this.collection.data.pop(item)
      } 
  });

}

}
