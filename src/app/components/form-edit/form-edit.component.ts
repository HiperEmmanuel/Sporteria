import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Form, NgModel} from '@angular/forms';
import {FileUploadModule} from 'primeng/primeng';
import {CaptchaModule} from 'primeng/primeng';
import {recaptcha2} from 'recaptcha2/index';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  obj = new Item;
  new_obj = {};
  constructor() {
    this.obj.id = 0;
  this.obj.email = '';
  this.obj.curp = '';
  this.obj.name = '';
  this.obj.app = '';
  this.obj.apm = '';
  this.obj.sex = '';
  this.obj.numcel = '';
  this.obj.bank = '';
  this.obj.numcred = 0;
  this.obj.interkey = 0;
  this.obj.credit = 0;
  this.obj.registerdate = '';
  this.obj.recomendeds = 0;
   }

@Output() sendtosave = new EventEmitter();

   save_client() {
this.new_obj = {
'id': this.obj.id,
'email': this.obj.email,
'curp': this.obj.curp,
'name': this.obj.name,
'app': this.obj.app,
'apm': this.obj.apm,
'sex': this.obj.sex,
'numcel': this.obj.numcel,
'bank': this.obj.bank,
'numcred': this.obj.numcred,
'interkey': this.obj.interkey,
'credit': this.obj.credit,
'descuento': this.obj.descuento,
'saldo': this.obj.saldo,
'pago': this.obj.pago,
'fecha': this.obj.fecha,
'nota': this.obj.nota,
'registerdate': this.obj.registerdate,
        'recomendeds': this.obj.recomendeds,
       };
      this.sendtosave.emit(this.new_obj);
      this.obj = new Item;
   }
  ngOnInit() {
  }

}

export class Item {
  public id: number;
  public email: string;
  public curp: string;
  public name: string;
  public app: string;
  public apm: string;
  public sex: string;
  public numcel: string;
  public bank: string;
  public numcred: number;
  public interkey: number;
  public credit: number;
  public registerdate: string;
  public recomendeds: Number = 0;
  public descuento: boolean = false;
  public saldo: Number = 0;
  public pago: Number = 0;
  public fecha: string = 'N/A';
  public nota: string = 'N/A';
}
export class FileUploadDemo {
  
      msgs: any[];
      
      uploadedFiles: any[] = [];
  
      onUpload(event) {
          for(let file of event.files) {
              this.uploadedFiles.push(file);
          }
      
          this.msgs = [];
          this.msgs.push({severity: 'info', summary: 'Archivo subido', detail: 'La imagen ha sido subida con exito.'});
      }
  }
  export class Captcha {
    
    msgsc: any[] = [];
    showResponse(event) {
        this.msgsc = [];
        this.msgsc.push({severity:'info', summary:'Completado', detail: 'Se a validado que no es robot'});
    }
  
//   recaptcha = new reCAPTCHA ({
  //   siteKey: '6LdM6TcUAAAAAClUMtihza2lUXmyD-hERDkLEpPE',
  //   secretKey: '6LdM6TcUAAAAAMudsXzzaSSvhm2VYX5xDZWE9_Kv'
  // })
}