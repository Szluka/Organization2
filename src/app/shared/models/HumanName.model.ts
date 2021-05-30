import {Period} from './Period.model';

export interface HumanName {
  use?: string;
  text?: string;
  family?: string;
  given?: string;
  prefix?: string;
  suffix?: string;
  period?: Period;
}
