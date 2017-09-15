import { Component} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent {
  public nw: boolean;
   public users: object[];
   public edited: boolean[];
   constructor() {
    this.users = [{
      'ID': '14111314',
      'name': 'Emmanuel',
      'register_date': '2017/09/02',
      'credit': '$14,000.00',
      'account_name': 'tugfaen4',
      'banco': 'HSBC',
      'tel': '6671777617',
      'recomendeds': '999'
    }, {
        'ID': '14111315',
        'name': 'Luis Fernando',
        'register_date': '2017/09/09',
        'credit': '$40,000.00',
        'account_name': 'hugvagf4',
        'banco': 'Bancomer',
        'tel': '6871233641',
        'recomendeds': '3'
    }
  ];
  this.edited = new Array<boolean>(this.users.length);
   }
   edit_selected(id: string) {
     this.edited[id] = !this.edited[id];
   }

   add_nw() {
     this.nw = !this.nw;
   }
}
