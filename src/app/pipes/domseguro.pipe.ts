import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


// No utilizada
@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){};

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    //retornar un safe (siempre y cuando el link este seguro )
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
