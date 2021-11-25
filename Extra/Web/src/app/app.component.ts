import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: any;
  collection = { count: 0, data: [] as any}
  
  constructor(private router:Router){}
  
  ngOnInit(): void {
    for (var i=0;i<this.collection.count;i++){
      this.collection.data.push(
        {
          ID_planta: i,
          Nombre: "nombre",
          regar: "false",
          luz: "true"      
    }      
        )
    }

    
this.config = {
  itemsPerPage: 5,
  currentPage: 1,
  totalItems: this.collection.data.length
};
}
}
