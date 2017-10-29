import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConexionService } from './conexion.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  user2: Observable<firebase.User>;
  title = 'Sporteria';
  public user: string;
  public password: string;
  private info: string[];
  constructor(public conexion: ConexionService) {
    this.user2 = this.conexion.get_auth();
  }

  ngOnInit() {
  }

  loguear(event) {
    this.info = [this.user, this.password];
    this.conexion.login(this.info);
    // this.loge.emit(this.conexion.user);
  }
  test() {
   // this.conexion.get_auth().subscribe(val => this.user2 = val.uid);
  }
}
