import { Component } from '@angular/core';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css']
})
export class MonedaComponent {
  moneda!: number;
  cambio: string = '0';
  
 
}
