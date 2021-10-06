import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-planta',
  templateUrl: './eliminar-planta.component.html',
  styleUrls: ['./eliminar-planta.component.css']
})
export class EliminarPlantaComponent {
  
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
