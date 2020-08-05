import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

   categorias: CategoriaModel[] = [];

   categoria: CategoriaModel = new CategoriaModel();

   actualizar: boolean = false;


  constructor( private categoriaService: CategoriaService) {
  }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this.categoriaService.getCategorias().then((data: any) => {
      console.log(data.categorias);
      this.categorias = data.categorias;
    }).catch((err) => {
      console.log(err);
    });
  }

  changeView(valor: boolean, idCategoria: string) {
    this.actualizar = valor;
    // this.categoriaService.getCategori
    console.log(idCategoria);
  }

  cancelUpdate(valor: boolean) {
    this.actualizar = valor;
  }

  agregarCategorias(){
    this.categoriaService.postCategoria(this.categoria).then(data => {
      console.log(data);
      this.obtenerCategorias();
    }).catch((err) => {
      console.log(err);
    });
    

  }



}
