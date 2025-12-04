import { Component, signal } from '@angular/core';
import { SearchBox } from './components/search-box/search-box';
import { DividerModule } from 'primeng/divider';
import { SearchResult } from './components/search-result/search-result';
import { Cenario } from './types/cenario/cenario';
import { Filter } from './types/filter';
import { CenarioProvider } from './core/guard/cenario/cenario.provider';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  constructor() {}
}
