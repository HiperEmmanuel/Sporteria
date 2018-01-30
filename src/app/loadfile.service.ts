import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable, AngularFireDatabaseModule} from 'angularfire2/database';
@Injectable()
export class LoadfileService {
private basePath:string = '/uploads';
//uploads: FirebaseListObservable<Archivo[]>;
  constructor(public angularFireDatabase: AngularFireDatabaseModule) { }

}
