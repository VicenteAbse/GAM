import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.less']
})
export class InicioComponent implements OnInit {

  noticias = [
    { id:"1", titulo: "Vidal ya entrena con el Inter", imagen: "assets/arturo vidal inter.jpg", autor: "Walter White" },
    { id:"2", titulo: "Garin debuta con victoria en Roland Garros", imagen: "assets/Garin roland garros.jpg", autor: "Homero Simpson" },
    { id:"3", titulo: "Comienza el mundial de League of Legends", imagen: "assets/lol worlds.jpg", autor: "El Autor de la noticia"},
  ];

  relacionados = [
    { id: "4", titulo: "Colo-Colo anuncia la salida de Gualberto Jara", imagen:"assets/Gualberto Jara.jpg" },
    { id:"5", titulo:"Claudio Bravo se pierde los partidos ante Uruguay y Colombia", imagen:"assets/Claudio Bravo.jpg"}
  ]


  constructor(private route: Router) { } 

  ngOnInit(): void {
  }

  irANoticia(id:string) {
    this.route.navigate(['noticia-preview'], { queryParams: { idNoticia: id } });
  }

}
