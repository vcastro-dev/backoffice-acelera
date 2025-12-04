import { Component, input } from '@angular/core';
import { PrimengModule } from '../../../../ui/primeng/primeng-module';
import { Cenario } from '../../../../types/cenario/cenario';

@Component({
  selector: 'app-search-result',
  imports: [PrimengModule],
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
