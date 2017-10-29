import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class ConexionService {
  items: FirebaseListObservable<any[]>;
  public user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = afAuth.authState;
   }
  public get_auth() {
    return this.afAuth.authState;
  }

  public get_users() {
    return this.af.list('/ids');
  }

   get_clientes() {
     return this.af.list('/cliente');
   }
  login(event) {
    const email = this.af.object('/ids/' + event[0]);
    email.subscribe(ar => {
      this.afAuth.auth.signInWithEmailAndPassword(ar.email, event[1]).then(val => console.log('success')
      ).catch(function (error) {
        console.log(error.message);
      });
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  Send(event) {
    this.af.list('/cliente').subscribe(val => event.id = 100 + val.length);
    const clientes = this.af.object('/cliente/' + event.id);
    clientes.set(event);  // .push({[event.id]: event});
  }
}
