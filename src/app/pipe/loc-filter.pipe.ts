import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user';

@Pipe({
  name: 'locFilter'
})
export class LocFilterPipe implements PipeTransform {

  transform(users: User[], ...location: number[]): User[] | null {
    // return value === null || location.length === 0 ?
    //   value.filter(value => location.some(id => id === value.locationId)) : value;
    if (users === null || location.length === 0) {
      return users;
    }
    return users.filter(value => location.some(id => id === value.locationId));
  }

}
