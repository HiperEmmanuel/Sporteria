import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Archivo } from './models/archivo.model';

@Injectable()
export class ConexionService {
  private basePath:string = '/afiliado';
  uploads: FirebaseListObservable<Archivo[]>;
  items: FirebaseListObservable<any[]>;
  op:any;
  public user: Observable<firebase.User>;
  constructor(private http: Http, private router: Router, public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = afAuth.authState;
   }
   //--------------------------------------------------------------------------------
   private saveFileData(upload:Archivo){
     this.af.list('${this.basePath}/').push(upload);
   }

   pushupload(upload:Archivo){
     const storageRef = firebase.storage().ref();
     const uploadTask = storageRef.child('${this.basePath}/${upload.file.name}').put(upload.file);
     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
      upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
    },
    (error) => {
      console.log(error);
    },
    () => {
      upload.url = uploadTask.snapshot.downloadURL;
      upload.name = upload.file.name;
      this.saveFileData(upload);
    }
    );
   }
   //--------------------------------------------------------------------------------
  public get_auth() {
    return this.afAuth.authState;
  }
  public get_uid(){
    return this.afAuth.auth.currentUser.uid;
  }

  get_cp(data) {
    return this.http.get('https://api-codigos-postales.herokuapp.com/v2/codigo_postal/'+data).map(res => res.json());
  }

  public new_user(data, data2) {
    data2.email = data.email;
    data2.status = true;
    this.af.list('/users').subscribe(val => {data2.id = 1 + val.length;} );
    console.log(data2.id);
    const clientes = this.af.object('/users/' + data2.id);
    clientes.set(data2);
    this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password).then(a => console.log('success'));
      //this.afAuth.auth.signInWithEmailAndPassword(this.op['u'], this.op['p']).then(f => {return true;});}
  }
  
  login(event):boolean {

      try {
      this.afAuth.auth.signInWithEmailAndPassword(event[0], event[1]).then(val => {
        this.op['u'] = event[0];
        this.op['p'] = event[1];
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
    return this.af.list('/users');
  }

   get_clientes() {
     return this.af.list('/cliente');
   }
  get_clientes_by_user(query = {}): FirebaseListObservable<any[]> {
    return this.af.list('/cliente', {query:query});
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
    event.afiliado = this.afAuth.auth.currentUser.uid;
    this.af.list('/cliente').subscribe(val => { event.id = 100 + val.length; });
    console.log('ok');
    event.registerdate = new Date().toISOString().slice(0, 10);
    const clientes = this.af.object('/cliente/' + event.id);
    clientes.set(event);
  }
  SaveClient(event) {
    const clientes = this.af.object('/cliente/' + event.id);
    clientes.set(event);
      // .push({[event.id]: event});
  }
}
