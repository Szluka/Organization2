import {Organization} from './organization.model';
import {CodeableConcept} from './CodableConcept.model';
import {Period} from './Period.model';

export interface Identifier {
  use?: string;
  type?: CodeableConcept;
  system?: string;
  value?: string;
  period?: Period;
  assigner?: Organization;
}
