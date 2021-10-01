import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighttext'
})
export class HighlighttextPipe implements PipeTransform {

  transform(value: string, filter: string): string {
    const search = new RegExp(filter, 'gi');
    return filter.length > 0 ? value.replace(search, (match) => {
      return `<span class="highlight">${match}</span>`;
    }) : value
  }

}
