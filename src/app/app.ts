import { Component, signal } from '@angular/core';
import { SearchBox } from './components/search-box/search-box';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-root',
  imports: [DividerModule, SearchBox],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('backoffice-acelera');
}
