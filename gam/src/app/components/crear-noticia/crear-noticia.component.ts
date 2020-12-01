import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { NoticiaService } from "src/app/services/noticia.service";


@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.less']
})
  
  
export class CrearNoticiaComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  


  constructor( private storage: AngularFireStorage, private service: NoticiaService ) { }

  newsForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    categoria: new FormControl(''),
    cuerpo: new FormControl('', Validators.required),
    imagen : new FormControl('', Validators.required),
  })

  

  ngOnInit(): void {
    this.service.getImageDetailList();
    this.resetForm();
  }
  
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/no-image.png';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.newsForm.valid) {
      var filePath = `${formValue.categoria}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imagen'] = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.newsForm['controls'];
  }

  resetForm() {
    this.newsForm.reset();
    this.newsForm.setValue({
      titulo: '',
      categoria: 'Futbol',
      cuerpo: '',
      imagen: ''
    });
    this.imgSrc = '/assets/no-image.png';
    this.selectedImage = null;
    this.isSubmitted = false;
  }
  






}
