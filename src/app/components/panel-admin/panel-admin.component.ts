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
  cp:any={};
  constructor(private conexion: ConexionService) {
    this.cp.res = {};
   }
  updatece(){
    this.conexion.get_cp(this.cp['cp']).subscribe(val => {
      console.log(val);
      this.cp['res'] = val;
      this.nafiliado['municipio'] = this.cp['res']['municipio'];
      this.nafiliado['estado'] = this.cp['res']['estado'];
    });
  }
  create_acc() {
    if (this.nacc.password == this.nacc.password2){
     const d = this.conexion.new_user(this.nacc, this.nafiliado);
     if ( d ) {
      console.log('success');
     } else {
       console.log('fail');
     }
    }
  }
  ngOnInit() {
  }

}
