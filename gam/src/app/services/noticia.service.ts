import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


const apiUrl = "http://localhost:3000/api/"

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  detallesNoticia: AngularFireList<any>;

  constructor(private http: HttpClient, private firebase: AngularFireDatabase) {
   }

  getImageDetailList() {
    this.detallesNoticia = this.firebase.list('Noticias');
  }

  insertImageDetails(Noticia) {
    this.detallesNoticia.push(Noticia);
  }


  crearUsuario(data) {
    console.log(data)

    return new Promise((resolve, reject) => {
      this.http.post(
        `${apiUrl}crearUsuario`,
        data
      )
        .subscribe(
          (response: any) => {
            try {
              console.log('response', response)
              resolve(response)
            } catch (error) {
              console.log('error1', error)
              reject(error)
            }
          },
          error => {
            console.log('error2', error)
            reject(error)
          }
        )
    })
  }


}
