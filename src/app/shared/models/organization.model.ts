import {Identifier} from './identifier.model';
import {CodeableConcept} from './CodableConcept.model';
import {ContactPoint} from './ContactPoint.model';
import {Address} from './Address.model';
import {Contact} from './Contact.model';
import {Endpoint} from './Endpoint.model';

export class Organization {
  id?: string;
  identifier?: Identifier;
  active?: boolean;
  type?: CodeableConcept;
  name?: string;
  alias?: string;
  telecom?: ContactPoint;
  address?: Address;
  partOf?: Organization;
  contact?: Contact;
  endpoint?: Endpoint;

  constructor(name?: string, alias?: string, active?: boolean) {
  this.name = name;
  this.alias = alias;
  this.active = active;
}
}


