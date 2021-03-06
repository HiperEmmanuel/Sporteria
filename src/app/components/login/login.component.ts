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
  public email:string;
  cargando:boolean=false;
  private info: string[];
  funco: boolean= true;
  @Output() loge = new EventEmitter();
  constructor(private conexion: ConexionService, private router: Router) { }

  reset(){
    this.conexion.reset(this.email);
  }
  ngOnInit() {
  }

  loguear(event) {
    this.cargando = true;
    this.info = [this.user, this.password];
    this.cargando = this.conexion.login(this.info);
    // this.loge.emit(this.conexion.user);
  }
}