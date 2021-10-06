import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-planta',
  templateUrl: './agregar-planta.component.html',
  styleUrls: ['./agregar-planta.component.css']
})
export class AgregarPlantaComponent{
  
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
