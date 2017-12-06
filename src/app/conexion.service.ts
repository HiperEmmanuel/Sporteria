import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConexionService {
  items: FirebaseListObservable<any[]>;
  public user: Observable<firebase.User>;
  constructor(private http: Http, private router: Router, public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = afAuth.authState;
   }
  public get_auth() {
    return this.afAuth.authState;
  }

  get_cp(data) {
    return this.http.get('https://api-codigos-postales.herokuapp.com/v2/codigo_postal/'+data).map(res => res.json());
  }

  public new_user(data, data2) {
    this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password).then(
      f => {
        this.af.list('/users').subscribe(val => {data2.id = 1 + val.length;
        data2.email = data.email;
        });
        const clientes = this.af.object('/cliente/' + data2.id);
        clientes.set(data2);
        return true;}
    ).catch(
      f => { return false; }
    )
  }
  login(event):boolean {

      try {
      this.afAuth.auth.signInWithEmailAndPassword(event[0], event[1]).then(val => {
        return true;
      }
      ).catch(function (error) {
        return false;
      });
    }catch (e) {
        return false;
      }

  }

  public get_users() {
    return this.af.list('/ids');
  }

   get_clientes() {
     return this.af.list('/cliente');
   }

  reset(event) {
    //const email = this.af.object('/ids/' + event[0]);
    //email.subscribe(ar => {
    this.afAuth.auth.sendPasswordResetEmail(event).then(val => console.log('mensaje enviado')
    ).catch(function (error) {
      console.log(error.message);
    });
    //});
  }
  get_banks() {
    return this.af.list('/banks');
  }
 
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
  Send(event) {
    this.af.list('/cliente').subscribe(val => event.id = 100 + val.length);
    const clientes = this.af.object('/cliente/' + event.id);
    clientes.set(event);  // .push({[event.id]: event});
  }
  SaveClient(event) {
    const clientes = this.af.object('/cliente/' + event.id);
    clientes.set(event);
      // .push({[event.id]: event});
  }
}
