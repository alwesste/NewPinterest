import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {delay, Observable, of, tap} from "rxjs";
import {Cat} from "./cat.interface";
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})

export class CatService {

  // private keyApi = environment.catApiKey;
  // private apiUrl = 'https://api.thecatapi.com/v1/images/search';
  private apiUrlDbJson = 'http://localhost:3000/cats';

  http = inject(HttpClient);

  // getCats(limit: number): Observable<Cat[]> {
  //   const headers = new HttpHeaders({
  //     'x-api-key': this.keyApi
  //   });
  //   const params = new HttpParams()
  //     .set('limit', limit.toString());
  //
  //   return this.http.get<Cat[]>(this.apiUrl, {headers, params});
  // }

  getCats(): Observable<Cat[]> {
    // const params = new HttpParams().set('_limit', limit.toString());
    return this.http.get<Cat[]>(this.apiUrlDbJson
      // , { params }
    );
  }

  addCats(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.apiUrlDbJson, cat);
  }
}
