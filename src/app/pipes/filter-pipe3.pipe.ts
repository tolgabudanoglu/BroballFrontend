import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filterPipe3'
})
export class FilterPipe3Pipe implements PipeTransform {

  transform(value: User[], filterText3: string): User[] {
    filterText3=filterText3?filterText3.toLocaleLowerCase():""
    return filterText3?value.filter((p:User)=>p.name.toLocaleLowerCase().indexOf(filterText3)!==-1)
    :value;
  }

}
