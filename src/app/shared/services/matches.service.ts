import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MatchsQuery } from '../interfaces/queries/matchs.query';
import { ApiResponse } from '../interfaces/api.response';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getMatches(): Observable<MatchsQuery[]> {
    return this.http.get<MatchsQuery[]>(`${environment.api}/match/1/1/1`).pipe(
      map(matches => matches.map(match => ({ ...match, played: !!match.played })))
    );
  }

  updateMatch(match: any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${environment.api}/match`, match)
  }
}
