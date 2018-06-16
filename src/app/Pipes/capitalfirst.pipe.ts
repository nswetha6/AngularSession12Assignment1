import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalfirst'
})
export class CapitalfirstPipe implements PipeTransform {

 // transform(value: any, args?: any): any {
  transform(value: string, firstletter: string): string {
    if (value==null)
     return null;
     else
      return value.charAt(0).toUpperCase()+ value.slice(1);
  }

}
