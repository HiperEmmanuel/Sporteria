import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ConexionService } from '../../conexion.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})

export class TableComponent implements OnInit {
  public nw: boolean;
  public users: FirebaseListObservable<any[]>;
  @Output() sv = new EventEmitter();
   public edited: boolean[];
   n: number;
   fecha = Date;
   es: any;
   ngOnInit() {
    this.es = {
        firstDayOfWeek: 1,
        dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
        dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
        dayNamesMin: [ "D","L","M","X","J","V","S" ],
        monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
        monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
        today: 'Hoy',
        clear: 'Borrar'
    }
  }

   cars: any[];
   desc: any[];
   batos: any[];
   rangeDates: Date[];
   yearFilter: number;
  msgs: any[] = [];
   constructor(private conexion: ConexionService) {
  this.n = 2;
  
  // this.users.forEach(function(g){this.n++; });
  this.users = this.conexion.get_clientes();
  this.edited = new Array<boolean>(this.n);
   }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Clientes', detail: 'Guardado Satisfactoriamente' });
  }

   edit_selected(id: string) {
     this.edited[id] = !this.edited[id];
   }

   add_nw() {
     this.nw = !this.nw;
   }

   sendtosavetoo(event) {
     this.conexion.Send(event);
   }

   saveClient(data) {
    this.conexion.SaveClient(data);
     this.showSuccess();
   }
   
}

