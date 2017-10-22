import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ConexionService } from '../conexion.service';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  public nw: boolean;
  public users: FirebaseListObservable<any[]>;
  @Output() sv = new EventEmitter();
  public edited: boolean[];
  n: number;
  constructor(private conexion: ConexionService) {
  }

  ngOnInit() {
    this.users = this.conexion.get_users();
    this.edited = new Array<boolean>(this.users.subscribe.length);
   }

  edit_selected(id: string) {
    this.edited[id] = !this.edited[id];
  }

  add_nw() {
    this.nw = !this.nw;
  }

  edit(event) {
    this.nw = false;
  }
}
