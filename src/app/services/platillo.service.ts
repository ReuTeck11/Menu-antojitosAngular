import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PlatilloModel } from '../models/platillo';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/api';

  getPlatillo() {
    return this.http.get( `${this.url}/platillo`).toPromise();
  }

  postPlatillo(platillo: PlatilloModel){
    return this.http.post(`${this.url}/platilo`, platillo).toPromise();
  }

  putPlatillo(platilo: PlatilloModel){
    return this.http.put(`${this.url}/platillo/${platilo._id}`, platilo).toPromise();
  }

}