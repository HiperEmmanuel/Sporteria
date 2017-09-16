import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

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
  }
  login(event) {
    this.msgVal = event['user'];
    this.afAuth.auth.signInWithEmailAndPassword('softwarehiper@gmail.com', 'Admin12++').catch(function (error) {
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  Send(desc: string) {
    this.items.push({ message: desc });
    this.msgVal = '';
  }
}
