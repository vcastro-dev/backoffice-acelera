import { CenarioStatus } from './cenario-status';

const arrayOfAllStatus = <T extends CenarioStatus[]>(
  array: T & ([CenarioStatus] extends [T[number]] ? unknown : 'Invalid')
) => array;

export function isCenarioStatus(value: any): value is CenarioStatus {
  return arrayOfAllStatus(value).includes(value as CenarioStatus);
}
