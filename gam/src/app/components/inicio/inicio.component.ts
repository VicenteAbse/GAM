import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.less']
})
export class InicioComponent implements OnInit {

  
  listaNoticias: any[];
  indexArray: any[];

  constructor(private route: Router, private service: NoticiaService) { } 

  ngOnInit(): void {
    this.service.getImageDetailList();
    this.service.detallesNoticia.snapshotChanges().subscribe(
      list => {
        this.listaNoticias = list.map(item => { return item.payload.val(); });
        this.indexArray = Array.from(Array(Math.ceil(this.listaNoticias.length)).keys());
      }
    ); 
  }

  irANoticia(id: any) { 
    this.route.navigate(['noticia-preview'], { queryParams: { idNoticia: id } }); 
  }

}
