import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Planta } from './Modelo/Planta';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = environment.baseUrl
  Url='http://localhost:8090/gardenStats/plantas';

  constructor(private http: HttpClient) { }

  ListarP():Observable<any>{
    return this.http.get<any>('http://localhost:8080/gardenStats/plantas')
  }

  ObtenerUnoP(id: string | number){
    return this.http.get(`${this.baseUrl}/get.php?idPlanta=${id}`);
  }

  AgregarP(planta: Planta){
    return this.http.post(`${this.baseUrl}/post.php`, planta);
  }

  EliminarP(planta: Planta){
    return this.http.delete(`${this.baseUrl}/delete.php?idPlanta=${planta.ID_planta}`);
  }

  EditP(planta: Planta)
  {
    return this.http.put(`${this.baseUrl}/update.php`, planta);
  }

  
}
