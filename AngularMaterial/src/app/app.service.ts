import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planta } from './planta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getPlantas(){
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getPlanta(id: string | number){
    return this.http.get(`${this.baseUrl}/get.php?idPlanta=${id}`);
  }

  addPlanta(planta: Planta){
    return this.http.post(`${this.baseUrl}/post.php`, planta);
  }

  deletePlanta(planta: Planta){
    return this.http.delete(`${this.baseUrl}/delete.php?idPlanta=${planta.ID_planta}`);
  }

  updatePlanta(planta: Planta)
  {
    return this.http.put(`${this.baseUrl}/update.php`, planta);
  }
}