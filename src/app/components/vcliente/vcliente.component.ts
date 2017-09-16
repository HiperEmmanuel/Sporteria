import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vcliente',
  templateUrl: './vcliente.component.html',
  styleUrls: ['./vcliente.component.css']
})
export class VclienteComponent {
  public id: number;
  public email: string;
  public curp: string;
  public name: string;
  public app: string;
  public apm: string;
  public sex: boolean;
  public numcel: string;
  public bank: string;
  public numcred: number;
  public interkey: number;
  public credit: number;
  constructor() {
  }

}
