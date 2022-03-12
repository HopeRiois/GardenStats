import { Component, OnInit } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgregarPlantaComponent } from './agregar-planta/agregar-planta.component';
import { EditarPlantaComponent } from './editar-planta/editar-planta.component';
import { EliminarPlantaComponent } from './eliminar-planta/eliminar-planta.component';
import { AppService } from '../app.service';
import { Planta } from '../Modelo/Planta';
import { ComprobarComponent } from './comprobar/comprobar.component';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})

export class PlantasComponent implements OnInit{

  collection = {count:3, data:[] as any}
  ID_planta: number | undefined;
  Nombre: string | undefined;
  plantas: Planta[] | undefined;

  constructor(private router:Router,public dialog: MatDialog, private service:AppService) {

    this.collection.data.push(
      {
        ID_planta: 1,
        Nombre: "Tomate",
        Regar: "Si",
        Luz: "No"      
  })
  this.collection.data.push(
    {
      ID_planta: 2,
      Nombre: "Pepino",
      Regar: "Si",
      Luz: "Si"      
})

this.collection.data.push(
  {
    ID_planta: 3,
    Nombre: "Jazmin",
    Regar: "No",
    Luz: "Si"      
})
  }

  ngOnInit(): void {
    this.service.ListarP().subscribe(data=>{this.plantas=data; console.log("try"); console.log(data);})
    };


  agregarplanta(){
    const dialogRef= this.dialog.open(AgregarPlantaComponent, {
      data: {ID_planta: this.ID_planta, Nombre: this.Nombre}});
    
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if(result.ID_planta){
          this.collection.data.push(result)
        }
        this.collection.count+=1;
        console.log(this.collection.count)
      });

  }

  modificarplanta(){
    this.dialog.open(EditarPlantaComponent);
  }

  eliminarplanta(item: any):void{
    let dialogRef= this.dialog.open(EliminarPlantaComponent);
    dialogRef.afterClosed().subscribe((confirmado: Boolean) => {
      if (confirmado) {
          this.collection.data.pop(item)
        
      } 
  });

}

comprobarplanta(){
  this.dialog.open(ComprobarComponent);
}
}
