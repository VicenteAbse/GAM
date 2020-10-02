import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.less']
})
export class IniciarSesionComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.route.navigate(['inicio']);
  }

}
