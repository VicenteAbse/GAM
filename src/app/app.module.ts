import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule} from '@angular/material/select'
import { MatMenuModule } from '@angular/material/menu';
import { FutbolComponent } from './components/futbol/futbol.component';
import { RouterModule, Routes } from '@angular/router';
import { CrearNoticiaComponent } from './components/crear-noticia/crear-noticia.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoticiaPreviewComponent } from './components/noticia-preview/noticia-preview.component';

const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'futbol',  component: FutbolComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    IniciarSesionComponent,
    RegistrarseComponent,
    FutbolComponent,
    CrearNoticiaComponent,
    NavbarComponent,
    NoticiaPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    NgbModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatTabsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
