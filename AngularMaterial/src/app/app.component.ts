import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularMaterial';
  opened = false;
  constructor(private router:Router, private appService: AppService){}
  
  ngOnInit(): void {
    this.appService.getPlantas().subscribe((respuesta)=>{console.log(respuesta);})
  };

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
