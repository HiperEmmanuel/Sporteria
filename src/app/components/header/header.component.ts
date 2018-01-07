import { Component, Input} from '@angular/core';
import * as firebase from 'firebase/app';
import { ConexionService } from '../../conexion.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  @Input()
  user2: Observable<firebase.User>;
  info: any;
  name: string = '';
  admin = false;
  constructor(public conexion: ConexionService) {
    this.user2 = this.conexion.get_auth();
    this.conexion.get_users().subscribe(val => {
      var em;
      this.user2.subscribe(val2 => {
        em = val2.email;
        val.forEach(a => {
          if (a.email === em) {
            this.info = a;
            if (this.info.permisos == 2) {
              this.admin = true;
            }
            this.name = this.info.first_name + ' ' + this.info.app;
          }
        });
      });
    });
  }
}
