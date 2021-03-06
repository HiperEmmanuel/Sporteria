import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InplaceModule, InputMaskModule, DataTableModule, SharedModule, CalendarModule, DropdownModule } from 'primeng/primeng';
import { Http, HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './components/login/login.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { VclienteComponent } from './components/vcliente/vcliente.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { AdminComponent } from './admin/admin.component';
import { ConexionService } from './conexion.service';
import { BuscadorReporteComponent } from './components/buscador-reporte/buscador-reporte.component';
import {InputTextModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import { CaptchaModule, DialogModule, InputSwitchModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {recaptcha2} from 'recaptcha2/index';
import { ResourceLoaderImpl } from '@angular/platform-browser-dynamic/src/resource_loader/resource_loader_impl';
import { AAfiliadoComponent } from './components/panel-admin/a-afiliado/a-afiliado.component';
import { EAfiliadoComponent } from './components/panel-admin/e-afiliado/e-afiliado.component';
import { EClienteComponent } from './components/panel-admin/e-cliente/e-cliente.component';
import { ABancoComponent } from './components/panel-admin/a-banco/a-banco.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'reportes', component: ReporteComponent },
  { path: 'admin-panel', component: AdminComponent }
];

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
    PanelAdminComponent,
    VclienteComponent,
    ReporteComponent,
    AdminComponent,
    BuscadorReporteComponent,
    AAfiliadoComponent,
    EAfiliadoComponent,
    EClienteComponent,
    ABancoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    DialogModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DataTableModule,
    CalendarModule,
    DropdownModule,
    InplaceModule,
    InputMaskModule,
    SharedModule,
    InputTextModule,
    InputSwitchModule,
    FileUploadModule,
    CaptchaModule,
    GrowlModule
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

