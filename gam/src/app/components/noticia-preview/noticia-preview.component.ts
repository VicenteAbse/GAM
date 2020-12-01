import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportsNotUsedAsValues } from 'typescript';

@Component({
  selector: 'app-noticia-preview',
  templateUrl: './noticia-preview.component.html',
  styleUrls: ['./noticia-preview.component.less']
})
export class NoticiaPreviewComponent implements OnInit {

  idNoticia: string;

  noticia = {
    id: "1",
    titulo: "Vidal ya entrena con el Inter",
    imagen: "assets/arturo vidal inter.jpg",
    autor: "Walter White",
    cuerpo: "Arturo Vidal ya llego a Milán, y ya se entrena con Alexis Sánchez y el resto de sus compañeros en el Inter. El formado en Colo-colo y ex jugador del Barcelona firmó por 2 temporadas en los neroazurris y ya está a disposición de Antonio Conte para disputar el proximo partido de Serie A ante la Fiorentina. El volante chileno se mostró contento en su llegada a italia, 'Vine acá a ganarlo todo y disfrutar de mi futbol' declaró Arturo"
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idNoticia = params.idNoticia;
    });
  }

}
