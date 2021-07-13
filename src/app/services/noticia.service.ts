import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros:any): Observable<any>{

    const URL = "https://newsapi.org/v2/top-headlines?country="+ parametros.pais +"&category="+ parametros.categoria +"&apiKey=eaf2a9b879484a88b6fadaec3b48b4bd";

    return this.http.get(URL);

  }
}
