import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighttext'
})
export class HighlighttextPipe implements PipeTransform {

  transform(value: string, filter: string): unknown {
    return filter.length > 0 ? value.replace(filter, 'x') : value
  }

}
