import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Routes } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.less']
})
export class RegistrarseComponent implements OnInit {

  constructor(private fb: FormBuilder, private noticiaService: NoticiaService, private router: Router) { }
  
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required,Validators.email]],
    password: ['', Validators.required],
  });

  async insertUsuario(){
    if(this.profileForm.valid){

      var validar
      await this.noticiaService.crearUsuario(this.profileForm.value).then(result => {
        
        validar= result
        if(validar.sucess==false){
          alert("El correo ingresado ya esta en uso")
        }
        else{
          alert("Usuario Creado")
          this.router.navigate(['/inicio'])
        }
      })
    }

  }

  ngOnInit(): void {
  }

}
