import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class ConexionService {
  items: FirebaseListObservable<any[]>;
  get_auth() {
    return this.afAuth.authState;
  }
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
   }

   get_clientes() {
     return this.af.list('/cliente');
   }
  login(event) {
    let email = this.af.list('/ids', { query: {equalTo: event['id']} })[0];
    return this.af.list('/ids', { query: { equalTo: event['id'] } }).subscribe();
    // this.afAuth.auth.signInWithEmailAndPassword(email['email'], 'Admin12++').catch(function (error) {
    // });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  Send(event) {
    const clientes = this.af.object('/cliente/' + event.id);
    clientes.set(event);  // .push({[event.id]: event});
  }
}
