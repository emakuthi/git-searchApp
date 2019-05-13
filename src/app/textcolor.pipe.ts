import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textcolor'
})
export class TextcolorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
