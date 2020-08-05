import { Component, OnInit } from '@angular/core';
import { PlatilloModel } from '../../models/platillo';
import { PlatilloService } from '../../services/platillo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {

  public platillo: PlatilloModel;

  listaPlatillo: PlatilloModel[];

  platillos: PlatilloModel[] = [];

  actualizar: boolean = false;


  constructor( private platilloService: PlatilloService) {
    this.platillo = new PlatilloModel();
  }

  ngOnInit(): void {
    this.obtenerPlatillo();
  }

  obtenerPlatillo(){
    this.platilloService.getPlatillo().then((data: any) => {
      console.log(data.platillos);
      this.platillos = data.platillos;
    }).catch((err) => {
      console.log(err);
    });
  }

  agregarCategorias(form: NgForm){
    this.platilloService.postPlatillo(form.value).then(data => {
      this.obtenerPlatillo();
      console.log(data);
      form.reset();
    });
  }

  
  changeView(valor: boolean, idPlatillo: string) {
    this.actualizar = valor;
    // this.categoriaService.getCategori
    console.log(idPlatillo);
  }

  cancelUpdate(valor: boolean) {
    this.actualizar = valor;
  }

}
