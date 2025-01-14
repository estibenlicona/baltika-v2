import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MatchsQuery } from '../interfaces/queries/matchs.query';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private apiUrl = `${environment.api}/matches/1/1/1`;

  constructor(private http: HttpClient) { }

  getMatches(): Observable<MatchsQuery[]> {
    return this.http.get<MatchsQuery[]>(this.apiUrl).pipe(
      map(matches => matches.map(match => ({ ...match, played: !!match.played })))
    );
  }
}
