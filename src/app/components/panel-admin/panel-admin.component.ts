import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../conexion.service';
@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styles: []
})

export class PanelAdminComponent implements OnInit {
  nacc:any={};
  nafiliado:any={};
  constructor(private conexion: ConexionService) {
   }
  
  create_acc() {
    if (this.nacc.password == this.nacc.password2){
     if (this.conexion.new_user(this.nacc, this.nafiliado)) {
        alert('Se agrego el usuario');
      }else {
       alert('Epic fail');
      }
    }
  }
  ngOnInit() {
  }

}
