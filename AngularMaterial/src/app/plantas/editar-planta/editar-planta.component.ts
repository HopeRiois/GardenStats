import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-planta',
  templateUrl: './editar-planta.component.html',
  styleUrls: ['./editar-planta.component.css']
})
export class EditarPlantaComponent{

  constructor(private router:Router){}ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
;
  agregarplanta(){
    this.router.navigate(["agregarplanta"])
  }
  modificarplanta(){
    this.router.navigate(["editarplanta"])
  }
  eliminarplanta(){
    this.router.navigate(["eliminarplanta"])
  }
}
