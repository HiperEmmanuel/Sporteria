import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ConexionService } from '../../conexion.service';
import { Query } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import * as Lodash from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})

export class TableComponent implements OnInit {
  public nw: boolean;
  public users: FirebaseListObservable<any[]>;
  size$: BehaviorSubject<string|null>;
  public users2;
  @Output() sv = new EventEmitter();
   public edited: boolean[];
   n: number;
   fecha = Date;
   es: any;
  public banks: any[];
  cargando = true;
 
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
  private subscription;
  filteredClient: any;
  filters = {};
  user1: Observable<any>;
   constructor(private conexion: ConexionService) {
     this.user1 = this.conexion.get_auth();
  this.n = 2;
  //setTimeout(() => { this.cargando = false; }, 4000)
     this.conexion.get_users().subscribe(val => {
       var em;
       var admin;
       this.user1.subscribe(val2 => {
         em = val2.email;
         val.forEach(a => {
           if (a.email === em) {
             if (a.permisos != 2) {
               this.filters['afiliado'] = val => val == this.conexion.get_uid();
             }
             this.subscription = this.conexion.get_clientes_by_user()
               .subscribe(customers => {
                 this.users2 = customers
                 this.filteredClient = Lodash.filter(this.users2, Lodash.conforms(this.filters))
               });
           }
         });
       });
     });
     
  this.conexion.get_banks().subscribe(f => { this.banks = f; this.cargando = false;});
  this.edited = new Array<boolean>(this.n);
   }
   pum (){
     console.log('hello world');
   }
  showSuccess() {
    this.msgs = [];
    this.banks.find(item => item.id === 1);
    this.msgs.push({ severity: 'success', summary: 'Clientes', detail: 'Guardado Satisfactoriamente' });
  }

  get_bank_name(id){
    this.banks.find(item => item.id === id).name;
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
   saveClient2(data){
     data.fecha = new Date().toISOString().slice(0,10);
     this.conexion.SaveClient(data);
     this.showSuccess();
   }

   saveClient(data) {
    this.conexion.SaveClient(data);
     this.showSuccess();
   }
   
}

