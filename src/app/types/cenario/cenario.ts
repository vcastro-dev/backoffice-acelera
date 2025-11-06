import { CenarioStatus } from '../cenario-status/cenario-status';

export type Cenario = {
  id: number;
  cotacaoId: number;
  createdAt: Date;
  status: CenarioStatus;
};
