import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosUrl = 'https://catalogo-autos.herokuapp.com/api/autos/limit/40';
  private autosActionsUrl = 'https://catalogo-autos.herokuapp.com/api/autos';
  constructor(private http: HttpClient) { }


  getAutos(): Observable<any> {
    return this.http.get<any>(this.autosUrl)
  }

  updateAutos(auto: Automovil): Observable<any> {
    return this.http.put<any>(`${this.autosActionsUrl}/${auto._id}`, auto)
  }

  deleteAutos(auto: Automovil): Observable<any> {
    return this.http.delete<any>(`${this.autosActionsUrl}/${auto._id}`)
  }

  newAutos(auto: Automovil): Observable<any> {
    return this.http.post<any>(`${this.autosActionsUrl}`,auto)
  }

}
