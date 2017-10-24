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
  private info: string[];
  constructor(private conexion: ConexionService) { }

  ngOnInit() {
  }

  loguear(event) {
    this.info = [this.user, this.password];
    this.conexion.login(this.info);
  }
}
