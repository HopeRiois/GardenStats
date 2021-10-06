import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-crecimiento',
  templateUrl: './editar-crecimiento.component.html',
  styleUrls: ['./editar-crecimiento.component.css']
})
export class EditarCrecimientoComponent {

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
