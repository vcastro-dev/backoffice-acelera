import { Component } from '@angular/core';
import { PrimengModule } from '../../../../ui/primeng/primeng-module';
import { CenarioStatus } from '../../../../types/cenario-status/cenario-status';

@Component({
  selector: 'app-search-box',
  imports: [PrimengModule],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
  standalone: true,
})
export class SearchBox {
  domainSugestions: Model['domain'][] = ['saude', 'odonto'];
  schemaSugestions: Model['schema'][] = [
    'database_schema_01',
    'database_schema_02',
    'database_schema_03',
    'database_schema_04',
    'database_schema_05',
  ];

  initialState: Model = {
    domain: 'saude',
    schema: 'database_schema_01',
  };

  model: Model = {
    ...this.initialState,
  };

  initializeModel() {
    this.model = {
      domain: 'saude',
      schema: 'database_schema_01',
    };
  }

  reset() {
    this.initializeModel();
  }

  search() {
    console.log(this.model);
  }

  domainCompletehMethod(event: any) {
    console.log(event);
    const query = event.query.toLowerCase();
    this.domainSugestions = this.domainSugestions.filter((domain) =>
      domain.toLowerCase().includes(query)
    );
  }

  schemaCompleteMethod(event: any) {
    console.log(event);
    const query = event.query.toLowerCase();
    this.schemaSugestions = this.schemaSugestions.filter((schema) =>
      schema.toLowerCase().includes(query)
    );
  }
}

type Model = {
  domain: 'saude' | 'odonto';
  schema: string;
};
