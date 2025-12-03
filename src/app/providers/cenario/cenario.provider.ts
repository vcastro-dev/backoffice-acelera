import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Filter } from '../../types/filter';
import { Cenario } from '../../types/cenario/cenario';
import { map } from 'rxjs';
import { isArrayOfCenarios } from '../../types/cenario/cenario.guard';

@Injectable({
  providedIn: 'root',
})
export class CenarioProvider {
  constructor(private http: HttpClient) {}

  getAll(filter?: Filter<Cenario>) {
    return this.http
      .get<CenarioDTO[]>(environment.API_URL + '/v1/cenarios', {
        params: { ...filter },
      })
      .pipe(
        map((response) => {
          if (isArrayOfCenarios(response)) {
            return response;
          }
          throw new Error('Invalid Cenario data');
        })
      );
  }
}
