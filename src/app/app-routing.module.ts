import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearNoticiaComponent } from './components/crear-noticia/crear-noticia.component';
import { FutbolComponent } from './components/futbol/futbol.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NoticiaPreviewComponent } from './components/noticia-preview/noticia-preview.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'futbol', component: FutbolComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'crear-noticia', component: CrearNoticiaComponent },
  { path: 'registrarse', component: RegistrarseComponent},
  { path: 'noticia-preview', component: NoticiaPreviewComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
