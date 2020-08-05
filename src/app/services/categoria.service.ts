import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CategoriaModel } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/api';

  getCategorias() {
    return this.http.get( `${this.url}/categoria`).toPromise();
  }

  postCategoria(categoria: CategoriaModel){
    return this.http.post(`${this.url}/categoria`, categoria).toPromise();
  }

  putCategoria(categoria: CategoriaModel){
    return this.http.put(`${this.url}/categoria/${categoria._id}`, categoria).toPromise();
  }
}