import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activo:boolean): string {

    let resultado: string='';

    if (activo){
      return (value);
    }else{
      for(let i=1; i<=value.length; i++){
        resultado+= '*';
      }
      return (resultado);
    }
  }

}

// Otra forma
// return (activo) ? '*'.repeat (value.length): value;
