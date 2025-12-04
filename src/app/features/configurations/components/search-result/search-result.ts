import { Component, input } from '@angular/core';
import { PrimengModule } from '../../../../ui/primeng/primeng-module';

@Component({
  selector: 'app-search-result',
  imports: [PrimengModule],
  templateUrl: './search-result.html',
  styleUrl: './search-result.css',
  standalone: true,
})
export class SearchResult {
  result = input.required<DatabaseSchema[]>();

  editar(schema: DatabaseSchema) {}
}
