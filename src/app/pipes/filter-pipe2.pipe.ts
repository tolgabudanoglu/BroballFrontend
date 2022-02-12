import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../models/Team';

@Pipe({
  name: 'filterPipe2'
})
export class FilterPipe2Pipe implements PipeTransform {

  transform(value: Team[], filterText2: string): Team[] {
    filterText2=filterText2?filterText2.toLocaleLowerCase():""
    return filterText2?value.filter((p:Team)=>p.teamName.toLocaleLowerCase().indexOf(filterText2)!==-1)
    :value;
  }

}
