import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
// Lo que va a hacer este pipe es a partir de un boolean, defininir si capitalizar todas las palabras o solo la primera.
  transform(value: string, todas:boolean): string {
    // Primero paso la frase toda a  minuscula
    value = value.toLocaleLowerCase();
    // Ahora separo en un arreglo, cortando en cada espacio.
    let palabras= value.split(' ');

    // Genero un if, dependiendo de que quiera capitalizar.
    if  (todas){
      palabras = palabras.map( palabra =>{
        return palabra[0].toUpperCase() + palabra.substring(1);
      });
    }else {
      palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substring(1);
    }
    return palabras.join(' ');
  }

}
