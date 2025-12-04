import { Component } from '@angular/core';
import { PrimengModule } from '../../ui/primeng/primeng-module';
import { SearchBox } from './components/search-box/search-box';
import { SearchResult } from './components/search-result/search-result';
import { CenarioProvider } from '../../core/services/cenario/cenario.provider';
import { Cenario } from '../../types/cenario/cenario';

@Component({
  selector: 'app-integrations-logs',
  imports: [PrimengModule, SearchBox, SearchResult],
  templateUrl: './integrations-logs.html',
  styleUrl: './integrations-logs.css',
})
export class IntegrationsLogs {
  constructor(private cenarioService: CenarioProvider) {}

  cenarios: Cenario[] = [];

  ngOnInit() {
    this.cenarioService.getAll().subscribe((data) => {
      const transformed: Cenario[] = data.map((dto) => ({
        id: parseInt(dto.id),
        cotacaoId: parseInt(dto.cotacaoId),
        createdAt: new Date(dto.createdAt),
        status: 'Ativo',
      }));

      this.cenarios = transformed;
    });
  }

  onSearch(filter: Cenario) {}
}
