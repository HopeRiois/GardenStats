import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-crecimiento',
  templateUrl: './agregar-crecimiento.component.html',
  styleUrls: ['./agregar-crecimiento.component.css']
})
export class AgregarCrecimientoComponent{

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
