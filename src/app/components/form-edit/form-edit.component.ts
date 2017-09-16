import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  obj = new Item;
  constructor() {
   }

@Output() sendtosave = new EventEmitter();

   save_client() {
      this.sendtosave.emit(this.obj);
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
  public sex: boolean;
  public numcel: string;
  public bank: string;
  public numcred: number;
  public interkey: number;
  public credit: number;
  public registerdate: Date;
  public recomendeds: Number = 0;
}
