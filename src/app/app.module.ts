import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './components/login/login.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCfe_GUU9RIAL_rLZdWfw8clTbGku8Uyvc',
  authDomain: 'sporteriamx.firebaseapp.com',
  databaseURL: 'https://sporteriamx.firebaseio.com',
  storageBucket: 'sporteriamx.appspot.com',
  messagingSenderId: '225651533984'
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    LoginComponent,
    FormEditComponent,
    PanelAdminComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

