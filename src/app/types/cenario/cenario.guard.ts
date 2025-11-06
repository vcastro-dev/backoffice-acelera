import { isCenarioStatus } from '../cenario-status/cenario-status.guard';
import { Cenario } from './cenario';

export function isArrayOfCenarios(data: any): data is CenarioDTO[] {
  return Array.isArray(data) && data.every(isCenario);
}

function isDateString(value: unknown): value is string {
  if (typeof value !== 'string') {
    return false;
  }
  const date = new Date(value);
  return !isNaN(date.getTime()); // Check if the date is valid (not "Invalid Date")
}

function isNumberString(value: unknown): value is string {
  return typeof value === 'string' && !isNaN(Number(value));
}

export function isCenario(data: any): data is CenarioDTO {
  return (
    data &&
    isNumberString(data.id) &&
    isNumberString(data.cotacaoId) &&
    isDateString(data.createdAt)
    /* desabilitado temporariamente, a API Mock não está retornando o status correto
    isCenarioStatus(data.status)
    */
  );
}
