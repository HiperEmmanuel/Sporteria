import { Component, Input, OnInit} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})

export class TableComponent {
  public nw: boolean;
  @Input() users: FirebaseListObservable<any[]>;
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
}

// export class VvclienteComponent {
//  public id: number;
//  public email: string;
//  public curp: string;
//  public name: string;
//   public app: string;
 //  public apm: string;
//   public sex: boolean;
//   public numcel: string;
//   public bank: string;
//   public numcred: number;
//   public interkey: number;
//   public credit: number;
//   constructor(id, email, curp, name, app, apm, sex, numcel, bank, numcred, interkey, credit) {
//     this.id = id;
//     this.email = email;
//     this.curp = curp;
//     this.name = name;
//     this.app = app;
//     this.apm = apm;
//     this.sex = sex;
//     this.numcel = numcel;
//     this.bank = bank;
//     this.numcred = numcred;
//     this.interkey = interkey;
//     this.credit = credit;
//   }}
// 