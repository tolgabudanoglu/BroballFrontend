import { Pipe, PipeTransform } from '@angular/core';
import { Field } from '../models/Field';
import { Team } from '../models/Team';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Field[], filterText: string): Field[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Field)=>p.fieldName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }


}
