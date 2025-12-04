import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Cenario } from '../../types/cenario/cenario';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search-result',
  imports: [ButtonModule, CardModule, TableModule],
  templateUrl: './search-result.html',
  styleUrl: './search-result.css',
  standalone: true,
})
export class SearchResult {
  cenarios = input.required<Cenario[]>();

  reprocessar(cenario: CenarioState) {}
}

type CenarioState = {
  data: Cenario;
  loading: boolean;
};
