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
  user: Observable<firebase.User>;
  title = 'Sporteria';

  constructor(private conexion: ConexionService) {
    this.user = this.conexion.get_auth();
  }

  ngOnInit() {
    console.log(this.conexion.login({ id: 100000, password: 'Admin12++' }));
  }
}
