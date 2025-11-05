import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

type CenarioFilter = {
  id?: string;
  status?: string;
  fromDate?: string;
  toDate?: string;
};

@Injectable({
  providedIn: 'root',
})
export class CenarioDataStore {
  constructor(private http: HttpClient) {}

  getCenarios(filter: CenarioFilter) {
    return this.http.get(environment.API_URL + 'api/v1/cenarios', {
      params: { ...filter },
    });
  }
}
