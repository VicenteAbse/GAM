import { Component, OnInit } from '@angular/core';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

interface Categoria {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.less']
})
  
  
export class CrearNoticiaComponent implements OnInit {
  file: File;
  photoSelected: String | ArrayBuffer;


  constructor() { }

  

  ngOnInit(): void {
  }
  

  onNoticiaSelected(event: HtmlInputEvent) {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  subirNoticia(titulo: HTMLInputElement, cuerpo: HTMLTextAreaElement): boolean {
    console.log(titulo.value)
    console.log(cuerpo.value)
    return false;
  }

}
