import { Component } from '@angular/core';
import { CenarioStatus } from '../../../types/cenario-status/cenario-status';

@Component({
  selector: 'app-search-box',
  imports: [],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
  standalone: true,
})
export class SearchBox {
  status: CenarioStatus[] = ['Ativo', 'Inativo', 'Pendente'];
  statusSugestions: CenarioStatus[] = [...this.status];

  model: Model = {
    id: null,
    status: 'Ativo',
    fromDate: new Date(),
    toDate: new Date(),
  };

  statusCompleteMethod(event: any) {
    const query = event.query.toLowerCase();
    this.statusSugestions = this.status.filter((status) => status.toLowerCase().includes(query));
  }

  reset() {
    this.model = {
      id: 0,
      status: 'Ativo',
      toDate: new Date(),
      fromDate: new Date(),
    };
  }
  search() {
    console.log(this.model);
  }
}

type Model = {
  id: number | null;
  status: CenarioStatus;
  fromDate: Date;
  toDate: Date;
};
