import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "http://localhost:3000/api/"

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

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
