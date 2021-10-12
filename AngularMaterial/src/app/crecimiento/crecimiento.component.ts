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
  Registro: string | undefined;
  Fecha: Date | undefined;

  constructor(private router:Router,public dialog: MatDialog){

    this.collection.data.push(
      {
        ID_crecimiento: 1,
        ID_planta: 1,
        Nombre: "Tomate",
        Registro: 5,
        Fecha: "2021-10-07"      
  }      
      )

      this.collection.data.push(
        {
          ID_crecimiento: 2,
          ID_planta: 2,
          Nombre: "Pepino",
          Registro: 4,
          Fecha: "2021-9-07"      
    }      
        )
        this.collection.data.push(
          {
            ID_crecimiento: 3,
            ID_planta: 2,
            Nombre: "Pepino",
            Registro: 6,
            Fecha: "2021-10-07"      
      }      
          )
          this.collection.data.push(
            {
              ID_crecimiento: 4,
              ID_planta: 3,
              Nombre: "Jazmin",
              Registro: 2,
              Fecha: "2021-08-07"      
        }      
            )
            this.collection.data.push(
              {
                ID_crecimiento: 5,
                ID_planta: 3,
                Nombre: "Jazmin",
                Registro: 3,
                Fecha: "2021-09-07"      
          }      
              )
              this.collection.data.push(
                {
                  ID_crecimiento: 6,
                  ID_planta: 3,
                  Nombre: "Jazmin",
                  Registro: 5,
                  Fecha: "2021-10-07"      
            }      
                )
    this.collection.count=5;
                  
  }
  ngOnInit(): void { }
;
  agregarcrecimiento(){
    const dialogRef= this.dialog.open(AgregarCrecimientoComponent, {
      data: {ID_planta: this.ID_planta, Registro: this.Registro, Fecha: this.Fecha}});
    
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
