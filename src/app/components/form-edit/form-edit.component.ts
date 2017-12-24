import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule , NgForm, FormControl  } from '@angular/forms';
import {FileUploadModule} from 'primeng/primeng';
import {CaptchaModule} from 'primeng/primeng';
import {recaptcha2} from 'recaptcha2/index';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  @ViewChild('formpro') formpro: NgForm;
  agregarCliente: FormGroup;
  mensaje: any;
  obj = new Item;
  new_obj = {};

  constructor(private formBuilder: FormBuilder) {
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

guardarCliente() {
  const guardarCliente = {
    IDCasino: this.agregarCliente.get('IDCasino').value,
    Email: this.agregarCliente.get('Email').value,
    Curp: this.agregarCliente.get('Curp').value,
    Nombre: this.agregarCliente.get('Nombre').value,
    Apellido: this.agregarCliente.get('Apellido').value,
    ApellidoM: this.agregarCliente.get('ApellidoM').value,
    Celular: this.agregarCliente.get('Celular').value,
    Sexo: this.agregarCliente.get('Sexo').value,
    Referido: this.agregarCliente.get('Referido').value,
    Tag: this.agregarCliente.get('Tag').value,
    Banco: this.agregarCliente.get('Banco').value,
    Tarjeta: this.agregarCliente.get('Tarjeta').value,
    Clabe: this.agregarCliente.get('Clabe').value,
    Credito: this.agregarCliente.get('Credito').value,
    Confirmacion: 'aun no',//this.agregarCliente.get('Confirmacion').value,
    Identificacion: ' aun no'//this.agregarCliente.get('Identificacion').value
  };
  return guardarCliente;
}
   ngOnInit() {
    this.agregarCliente = this.formBuilder.group({
      IDCasino: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)]
      ],
      Email: ['', [
        Validators.required,
        Validators.email]
      ],
      Curp: ['', [
        Validators.required,
        Validators.minLength(18),
      Validators.maxLength(18)]
      ],
      Nombre: ['', [
        Validators.required]
      ],
      Apellido: ['', [
        Validators.required]
      ],
      Celular: ['', [
        Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)]
      ],
      Tarjeta: ['', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)]
      ],
      Clabe: ['', [
        Validators.required,
        Validators.minLength(18),
        Validators.maxLength(18)]
      ],
      Credito: ['', [
        Validators.required]
      ],
      Banco: ['', [
        Validators.required]
      ],
      Referido: ['', [
        Validators.required]
      ],
      Sexo: ['', [
        Validators.required]
      ]
    });
  }

  onSubmit(){
    
  }

@Output() sendtosave = new EventEmitter();

   save_client() {
     var o = this.guardarCliente();
this.new_obj = {
'id': o.IDCasino,
'email': o.Email,
'curp': o.Curp,
'name': o.Nombre,
'app': o.Apellido,
'apm': o.ApellidoM,
'sex': o.Sexo,
'numcel': o.Celular,
'bank': o.Banco,
'numcred': o.Tarjeta,
'interkey': o.Clabe,
'credit': o.Credito,
'Confirmacion': o.Confirmacion,
'Identificacion': o.Identificacion,
'descuento': false,
'saldo': this.obj.saldo,
'pago': this.obj.pago,
'fecha': this.obj.fecha,
'nota': this.obj.nota,
'registerdate': this.obj.registerdate,
'recomendeds': o.Referido,
       };
      this.sendtosave.emit(this.new_obj);
      this.obj = new Item;
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
        this.msgsc.push({severity: 'info', summary: 'Completado', detail: 'Se a validado que no es robot'});
    }

//   recaptcha = new reCAPTCHA ({
  //   siteKey: '6LdM6TcUAAAAAClUMtihza2lUXmyD-hERDkLEpPE',
  //   secretKey: '6LdM6TcUAAAAAMudsXzzaSSvhm2VYX5xDZWE9_Kv'
  // })
  
}