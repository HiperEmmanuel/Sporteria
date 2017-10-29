import { Component, Input} from '@angular/core';
import * as firebase from 'firebase/app';
import { ConexionService } from '../../conexion.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  @Input()
  user2: Observable<firebase.User>;

}
