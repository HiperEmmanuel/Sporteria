import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../conexion.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  cars: any[];
  desc: any[];
  batos: FirebaseListObservable<any[]>;
  rangeDates: Date[];
  yearFilter: number;

  constructor(public conexion: ConexionService) {
    this.batos = this.conexion.get_clientes();
   }

  ngOnInit() {
  }

}
