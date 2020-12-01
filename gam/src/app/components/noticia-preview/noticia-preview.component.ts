import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticia-preview',
  templateUrl: './noticia-preview.component.html',
  styleUrls: ['./noticia-preview.component.less']
})
export class NoticiaPreviewComponent implements OnInit {

  idNoticia: string;
  listaNoticias: any[];
  indexArray: any[];



  constructor(private route: ActivatedRoute, private service: NoticiaService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idNoticia = params.idNoticia;
    }); 
    
    this.service.getImageDetailList();
    this.service.detallesNoticia.snapshotChanges().subscribe(
      list => {
        this.listaNoticias = list.map(item => { return item.payload.val(); });
        this.indexArray = Array.from(Array(Math.ceil(this.listaNoticias.length+1 / 3)).keys());
      }
    );
      
  }

}
