import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  title = 'Sporteria';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = this.afAuth.authState;
  this.items = af.list('/cliente');
  }
  login(event) {
    this.msgVal = event['user'];
    this.afAuth.auth.signInWithEmailAndPassword('softwarehiper@gmail.com', 'Admin12++').catch(function (error) {
    });
  }
  logout($event) {
    this.afAuth.auth.signOut();
  }
  Send(event) {
    const clientes = this.af.object('/cliente/' + event.id);
    clientes.set(event);  //.push({[event.id]: event});
  }
}
