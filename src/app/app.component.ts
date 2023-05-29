import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America';  //el html tiene acceso a esto.

  PI: number = Math.PI;

  porcentaje: number = 0.654;

  salario: number = 1234.5;

  fecha: Date = new Date();
  idioma: string = 'en';

  frase: string = 'soLo QueRiA caMbiAr lA HoRa'
  cambiarTodas: boolean=true;

  activo:boolean=true;

  //creo un objeto para utilizar el pipe JSON
  personaje={
    nombre:'Julia',
    habilidad:'ser una araña',
    direccion:{
      ubicacion:'rincon',
      lugar:'techo'
    }

  }

  valorPromesa = new Promise<string>( (resolve, reject) =>{
      setTimeout(() =>{
        resolve ('llego la data');
      }, 3500);
  });
}
