import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GetTeamsQuery } from "../interfaces/queries/teams.query";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private apiUrl = `${environment.api}/teams`;

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Array<GetTeamsQuery>> {
    return this.http.get<Array<GetTeamsQuery>>(this.apiUrl);
  }
}
