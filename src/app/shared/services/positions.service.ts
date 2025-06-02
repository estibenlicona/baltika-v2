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

  getPositions(): Observable<Array<PositionsQuery>> {
    const apiUrl = `${environment.api}/positions`;
    return this.http.get<Array<PositionsQuery>>(apiUrl);
  }
}
