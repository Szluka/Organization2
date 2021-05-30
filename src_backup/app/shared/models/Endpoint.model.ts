import {Identifier} from './identifier.model';
import {Coding} from './Coding.model';
import {Organization} from './organization.model';
import {ContactPoint} from './ContactPoint.model';
import {Period} from './Period.model';
import {CodeableConcept} from './CodableConcept.model';
import {Address} from './Address.model';

export interface Endpoint {
  identifier: Identifier;
  status: string;
  connectionType: Coding;
  name?: string;
  managingOrganization?: Organization;
  contact?: ContactPoint;
  period?: Period;
  payloadType?: CodeableConcept;
  payloadMimeType?: string;
  address: Address;
  header?: string;
}
