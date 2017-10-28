import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { InplaceModule, InputMaskModule, DataTableModule, SharedModule, CalendarModule, DropdownModule } from 'primeng/primeng';


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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    DataTableModule,
    CalendarModule,
    DropdownModule,
    InplaceModule,
    InputMaskModule,
    SharedModule
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

