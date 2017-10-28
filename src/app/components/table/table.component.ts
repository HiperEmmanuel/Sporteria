import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ConexionService } from '../../conexion.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})

export class TableComponent {
  public nw: boolean;
  public users: FirebaseListObservable<any[]>;
  @Output() sv = new EventEmitter();
   public edited: boolean[];
   n: number;

   cars: any[];
   desc: any[];
   batos: any[];
   rangeDates: Date[];
   yearFilter: number;
   constructor(private conexion: ConexionService) {
  this.n = 2;
  // this.users.forEach(function(g){this.n++; });
  this.users = this.conexion.get_clientes();
  this.edited = new Array<boolean>(this.n);
   }

   edit_selected(id: string) {
     this.edited[id] = !this.edited[id];
   }

   add_nw() {
     this.nw = !this.nw;
   }

   sendtosavetoo(event) {
     this.nw = false;
    this.sv.emit(event);
   }
}
