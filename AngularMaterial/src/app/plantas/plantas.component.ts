import { Component, OnInit } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
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
 ID_planta: number | undefined;
  Nombre: string | undefined;

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
  }
;
  agregarplanta(){
    const dialogRef= this.dialog.open(AgregarPlantaComponent, {
      data: {ID_planta: this.ID_planta, Nombre: this.Nombre}});
    
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if(result.ID_planta){
          this.collection.data.push(result)
        }
        
      });

  }

  modificarplanta(){
    this.dialog.open(EditarPlantaComponent);
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
