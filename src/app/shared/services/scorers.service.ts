import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScorersQuery } from '../interfaces/queries/scorers.query';

@Injectable({
  providedIn: 'root'
})
export class ScorersService {

  constructor(private http: HttpClient) { }

  getScorers(): Observable<Array<ScorersQuery>> {
    return this.http.get<Array<ScorersQuery>>(`${environment.api}/scorers`);
  }
}
