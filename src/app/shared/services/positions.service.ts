import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatchsQuery } from '../interfaces/queries/matchs.query';
import { PositionsQuery } from '../interfaces/queries/position.query';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private apiUrl = `${environment.api}/positions/1/1/1`;

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Array<PositionsQuery>> {
    return this.http.get<Array<PositionsQuery>>(this.apiUrl);
  }
}