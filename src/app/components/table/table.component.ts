import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})

export class TableComponent {
  public nw: boolean;
  @Input() users: FirebaseListObservable<any[]>;
  @Output() sv = new EventEmitter();
   public edited: boolean[];
   n: number;
   constructor() {
  this.n = 2;
  // this.users.forEach(function(g){this.n++; });
  this.edited = new Array<boolean>(this.n);
   }
   edit_selected(id: string) {
     this.edited[id] = !this.edited[id];
   }

   add_nw() {
     this.nw = !this.nw;
   }

   sendtosavetoo(event) {
    this.sv.emit(event);
   }
}
