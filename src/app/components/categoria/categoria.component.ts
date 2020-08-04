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

  public categoria: CategoriaModel;

  listaCategoria: CategoriaModel[];

  constructor( private categoriaService: CategoriaService) {
    this.categoria = new CategoriaModel();
  }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    // this.categoriaService.getCategorias().then((data) => {
    //   console.log(data);
    // }).catch((err) => {
    //   console.log(err);
    // });
    this.categoriaService.getCategorias().then((data: any) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  }

  agregarCategorias(form: NgForm){
    // this.categoriaService.postCategoria(form.value).subscribe(arg => {
    //   this.obtenerCategorias();
    //   console.log(arg);
    //   form.reset();
    // });
  }


}
