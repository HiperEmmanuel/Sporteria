import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConexionService } from '../conexion.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  obj = new Usuario;
  new_obj = {};
  constructor(private conexion: ConexionService) {
  }

  @Output() sendtosave = new EventEmitter();

  save_user() {
    this.new_obj = {
      'id': this.obj.id,
      'email': this.obj.email,
      'permisos': this.obj.permisos,
      'status': true,
      'general': {
        'RFC': this.obj.general.RFC,
        'name': this.obj.general.name,
        'app': this.obj.general.app,
        'apm': this.obj.general.apm,
        'cel': this.obj.general.cel
      }
    };
    this.conexion.create_user(this.new_obj, 'defaultpassword');
    this.obj = new Usuario;
    this.sendtosave.emit();
  }
  ngOnInit() {
  }

}

export class Usuario {
  public id: number;
  public email: string;
  public general = {
    RFC: '',
    name: '',
    app: '',
    apm: '',
    cel: ''
  };
  public permisos: Number = 0;
  public status: boolean;
}