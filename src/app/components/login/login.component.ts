import { Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  public user: string;
  public password: string;
  private info: string[];
  @Output() loginevent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  loguear(event) {
    this.info = [this.user, this.password];
    console.log(this.info);
    this.loginevent.emit(this.info);
  }
}
