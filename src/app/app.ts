import { Component, signal } from '@angular/core';
import { SearchBox } from './components/search-box/search-box';
import { DividerModule } from 'primeng/divider';
import { SearchResult } from './components/search-result/search-result';

@Component({
  selector: 'app-root',
  imports: [DividerModule, SearchBox, SearchResult],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('backoffice-acelera');
}
