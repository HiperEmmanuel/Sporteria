import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Form, NgModel} from '@angular/forms';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  obj = new Item;
  new_obj = {};
  constructor() {
    this.obj.id = 100;
  this.obj.email = 'el@gmail.com';
  this.obj.curp = 'fj389g9538hg93h3g';
  this.obj.name = 'ema';
  this.obj.app = 'alva';
  this.obj.apm = 'to';
  this.obj.sex = 'M';
  this.obj.numcel = '56905640';
  this.obj.bank = 'HSBC';
  this.obj.numcred = 902493049823094;
  this.obj.interkey = 960970569756756;
  this.obj.credit = 5000;
  this.obj.registerdate = '16/09/2017';
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
}
