import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Planta } from './Modelo/planta';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = environment.baseUrl
  Url='http://localhost:8080/backend/Planta';

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>('http://localhost:8080/backend/Planta')
  }

  getPlantas(){
    return this.http.get<Planta[]>(this.Url);
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
