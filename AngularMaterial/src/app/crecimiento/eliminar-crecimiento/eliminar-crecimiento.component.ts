import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-crecimiento',
  templateUrl: './eliminar-crecimiento.component.html',
  styleUrls: ['./eliminar-crecimiento.component.css']
})
export class EliminarCrecimientoComponent  {
  
  constructor(private router:Router){}ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
;
  agregarcrecimiento(){
    this.router.navigate(["agregarcrecimiento"])
  }
  modificarcrecimiento(){
    this.router.navigate(["editarcrecimiento"])
  }
  eliminarcrecimiento(){
    this.router.navigate(["eliminarcrecimiento"])
  }
}
