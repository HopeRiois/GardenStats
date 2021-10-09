import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterial';
  opened = false;
  constructor(private router:Router){};
  plantas(){
    this.router.navigate(["plantas"])
  }
  home(){
    this.router.navigate(["home"])
  }
  crecimiento(){
    this.router.navigate(["crecimiento"])
  }
  informe(){
    this.router.navigate(["informe"])
  }
  info(){
    this.router.navigate(["info"])
  }
}
