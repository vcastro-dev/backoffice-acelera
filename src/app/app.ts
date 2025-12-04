import { Component, signal } from '@angular/core';
import { SearchBox } from './components/search-box/search-box';
import { DividerModule } from 'primeng/divider';
import { SearchResult } from './components/search-result/search-result';
import { Cenario } from './types/cenario/cenario';
import { Filter } from './types/filter';
import { CenarioProvider } from './core/guard/cenario/cenario.provider';

@Component({
  selector: 'app-root',
  imports: [DividerModule, SearchBox, SearchResult],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  constructor(private cenarioService: CenarioProvider) {}
  cenarios = signal<Cenario[]>([]);

  ngOnInit() {
    this.cenarioService.getAll().subscribe((data) => {
      const transformed: Cenario[] = data.map((dto) => ({
        id: parseInt(dto.id),
        cotacaoId: parseInt(dto.cotacaoId),
        createdAt: new Date(dto.createdAt),
        status: 'Ativo',
      }));

      this.cenarios.set(transformed);
    });
  }

  onSearch(filter: Cenario) {}
}
