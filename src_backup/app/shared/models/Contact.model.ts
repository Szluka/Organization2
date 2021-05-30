import {CodeableConcept} from './CodableConcept.model';
import {ContactPoint} from './ContactPoint.model';
import {Address} from './Address.model';
import {HumanName} from './HumanName.model';

export interface Contact {
  purpose?: CodeableConcept;
  name?: HumanName;
  telecom?: ContactPoint;
  address?: Address;
}
