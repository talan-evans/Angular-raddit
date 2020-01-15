import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortVersion'
})
export class ShortVersionPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value.length > 100) {
      let shortversion = value.substr(0, 100) + '...';
      return shortversion;
    } else {
      return value;
    }
  }

}
