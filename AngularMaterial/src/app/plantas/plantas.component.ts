import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})

export class PlantasComponent{

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

