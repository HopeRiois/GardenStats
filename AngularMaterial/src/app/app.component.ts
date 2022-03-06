import { ProviderAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent {
  title = 'GardenStats';
  opened = false;
  constructor(private router:Router, private dataSvc: AppService){};

  ngOnInIt(){
    this.dataSvc.getAll().subscribe(res => {
      console.log(res)
    })
  }

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
  login(){
    this.router.navigate(["login"])
  }
}
