import { Component} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent {
   users: object;
   public edited: boolean;
   constructor() {
    this.edited = true;
   }
   edit_selected(id: string) {
      if (this.edited) {
        this.edited = false;
      }else {
        this.edited = true;
      }
   }
}
