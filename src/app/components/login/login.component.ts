import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ConexionService } from '../../conexion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  public user: string;
  public password: string;
  private info: string[];
  @Output() loge = new EventEmitter();
  constructor(private conexion: ConexionService, private router: Router) { }

  ngOnInit() {
  }

  loguear(event) {
    this.info = [this.user, this.password];
    this.conexion.login(this.info);
    // this.loge.emit(this.conexion.user);
  }
}
