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
   get_users() {
     return this.af.list('/ids');
   }

   create_user(user, password) {
     return this.afAuth.auth.createUserWithEmailAndPassword(user.email, password).then(obj => {
      let ids = this.af.object('/ids/');
      let i = 100000;
      this.af.list('/ids').subscribe(d => i = i + d.length);
      ids = this.af.object('/ids/' + i);
      user.id = i;
      ids.set(user);
      console.log('Success', obj);
      })
     .catch(obj => console.log('Failed: ', obj.message));
   }
  login(event) {
    this.afAuth.auth.signInWithEmailAndPassword('dumy@dumy.dumy', 'default');
    this.af.list('/ids', { query: { email: event['id'] } }).subscribe(obj => {
      this.afAuth.auth.signInWithEmailAndPassword(obj[0].$value, event['password']).catch(function (error) {
        this.logout();
      });
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  addclient(event) {
    const clientes = this.af.object('/cliente/' + event.id);
    clientes.set(event);  // .push({[event.id]: event});
  }
}
