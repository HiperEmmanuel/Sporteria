import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  cars: any[];
  desc: any[];
  batos: any[];
  rangeDates: Date[];
  yearFilter: number;

  constructor() {
    this.batos = [];
    this.batos.push(
      {
        id: 100,
        nombre: 'fernando',
        credito: 50000,
        saldo: 100,
        neto: 49900,
        descuento: '15%',
        pago: 0,
        semana: ['23/10/2017', '30/10/2017']
      }
    );
   }

  ngOnInit() {
  }

}
