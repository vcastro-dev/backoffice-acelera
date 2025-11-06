const CenarioStatus = ['Ativo', 'Inativo', 'Pendente'] as const;
export type CenarioStatus = (typeof CenarioStatus)[number];
