import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Cenario } from '../../types/cenario';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search-result',
  imports: [ButtonModule, CardModule, TableModule],
  templateUrl: './search-result.html',
  styleUrl: './search-result.css',
  standalone: true,
})
export class SearchResult {
  cenarios: CenarioState[] = [
    {
      data: {
        id: 1,
        cotacaoId: 1,
        status: 'Ativo',
        createdAt: new Date('2024-06-10T12:00:00Z'),
      },
      loading: false,
    },
    {
      data: {
        id: 2,
        cotacaoId: 1,
        status: 'Inativo',
        createdAt: new Date('2024-06-10T12:00:00Z'),
      },
      loading: false,
    },
    {
      data: {
        id: 3,
        cotacaoId: 2,
        status: 'Pendente',
        createdAt: new Date('2024-06-10T12:00:00Z'),
      },
      loading: false,
    },
  ];

  loading: boolean = false;

  reprocessar(cenario: CenarioState) {
    cenario.loading = true;

    setTimeout(() => {
      cenario.loading = false;
    }, 3000);
  }
}

type CenarioState = {
  data: Cenario;
  loading: boolean;
};
