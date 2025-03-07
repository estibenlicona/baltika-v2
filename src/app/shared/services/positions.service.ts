import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PositionsQuery } from '../interfaces/queries/position.query';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  constructor(private http: HttpClient) { }

  getPositions(seasonId: number): Observable<Array<PositionsQuery>> {
    const apiUrl = `${environment.api}/positions/1/${seasonId}/1`;
    return this.http.get<Array<PositionsQuery>>(apiUrl);
  }
}
