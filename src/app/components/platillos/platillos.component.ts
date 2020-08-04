import { Component, OnInit } from '@angular/core';
import { PlatilloModel } from '../../models/platillo';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {

  public platillo: PlatilloModel;

  constructor() { }

  ngOnInit(): void {
  }

}
