import { Component, OnInit } from '@angular/core';
import { SelectComponent, SelectOption } from '../../shared/components/select/select.component';
import { MatchService } from '../../shared/services/matches.service';
import { MatchsQuery } from '../../shared/interfaces/queries/matchs.query';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-fixture',
  imports: [ReactiveFormsModule, SelectComponent],
  templateUrl: './fixture.component.html',
  styleUrl: './fixture.component.css',
})
export class FixtureComponent implements OnInit {

  form!: FormGroup;
  teamSelected: string | number | null = null;
  matchDaySelected: string | number | null = 1;
  teamsOptions: SelectOption[] = [];
  matchdaysOptions: SelectOption[] = [];
  matches: MatchsQuery[] = [];
  matchesFiltered: MatchsQuery[] = [];

  constructor(private matchesService: MatchService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.form = this.fb.group({
      teamSelected: [null],
      matchdaySelected: [null]
    });
  }

  ngOnInit(): void {
    this.form.get('teamSelected')?.valueChanges.subscribe((teamId: number) => {
      const matchDay = this.form.get('matchdaySelected')?.value;
      this.filterMatches(matchDay, teamId);
    });

    this.form.get('matchdaySelected')?.valueChanges.subscribe((matchDay: number) => {
      const teamId = this.form.get('teamSelected')?.getRawValue();
      this.filterMatches(matchDay, teamId);
    });

    combineLatest([
      this.matchesService.getMatches(),
      this.route.queryParams
    ]).subscribe(([matches, params]) => {
      this.matches = matches;
      this.matchesFiltered = matches;
      this.teamsOptions = this.getUniqueTeams(matches);
      this.matchdaysOptions = this.getMatchDaysAsSelectOptions(matches);
      const teamId = Number(params['teamId']);
      if (teamId) {
        this.filterMatches(null, teamId);
      }
    });


  }

  filterMatches(matchDay: number | null, teamId: string | number | null): void {
    this.matchesFiltered = this.matches.filter(match => {
      const matchDayCondition = matchDay ? match.matchDay === matchDay : true;
      const teamCondition = teamId ? (match.homeId === teamId || match.awayId === teamId) : true;

      return matchDayCondition && teamCondition;
    });
  }

  getUniqueTeams(matches: MatchsQuery[]): SelectOption[] {
    const teamMap = new Map<number, string>();
    matches.forEach(match => {
      if (!teamMap.has(match.homeId)) {
        teamMap.set(match.homeId, match.home);
      }
      if (!teamMap.has(match.awayId)) {
        teamMap.set(match.awayId, match.away);
      }
    });
    return Array.from(teamMap, ([value, label]) => ({ label, value }));
  }

  getMatchDaysAsSelectOptions(matches: MatchsQuery[]): SelectOption[] {
    const uniqueMatchDays = Array.from(new Set(matches.map(match => match.matchDay)));
    return uniqueMatchDays.map(matchDay => ({
      label: `Jornada ${matchDay}`,
      value: matchDay,
    }));
  }
}
