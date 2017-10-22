import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ConexionService } from '../../conexion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  public user: string;
  public password: string;
  private info;
  constructor(private conexion: ConexionService) { }

  loguear(event) {
    this.info = {id: this.user, password: this.password};
    this.conexion.login(this.info);
  }
}
