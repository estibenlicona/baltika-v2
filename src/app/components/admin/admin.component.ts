import { Component, inject, OnInit } from '@angular/core';
import { TeamsService } from '../../shared/services/teams.service';
import { GetTeamsQuery } from '../../shared/interfaces/queries/teams.query';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { NumberInputDirective } from '../../shared/directives/number-input.directive';
import { MatchService } from '../../shared/services/matches.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ApiResponse } from '../../shared/interfaces/api.response';

@Component({
  selector: 'app-admin',
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule, 
    MatInputModule, MatButtonModule, NumberInputDirective, MatCheckboxModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  teamLabels: Array<string> = ['Equipo local', 'Equipo visitante'];
  goalLabels: Array<string> = ['Goles local', 'Goles visitante'];

  teamsService: TeamsService = inject(TeamsService);
  matchService: MatchService = inject(MatchService);
  dialog = inject(MatDialog);
  formBuilder: FormBuilder = inject(FormBuilder);

  matchForm!: FormGroup;
  teams: Array<GetTeamsQuery> = [];
  filteredHomeTeams!: Observable<any[]>;
  filteredAwayTeams!: Observable<any[]>;

  ngOnInit(): void {
    this.initForm();
    this.getTeams();
  }

  initForm() {
    this.matchForm = this.formBuilder.group({
      home: ['', Validators.required],
      away: ['', Validators.required],
      homeGoals: [null, [Validators.required]],
      awayGoals: [null, [Validators.required]],
      played: [true, [Validators.required]],
    });

    this.filteredHomeTeams = this.matchForm.get('home')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTeams(value))
    );

    this.filteredAwayTeams = this.matchForm.get('away')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTeams(value))
    );
  }

  getTeams() {
    this.teamsService.getTeams().subscribe((teams: Array<GetTeamsQuery>) => {
      this.teams = teams;
    })
  }

  onSubmit(): void {
    this.matchForm.markAllAsTouched();

    if (this.matchForm.valid) {
      const tournamentId = 1;
      const seasonId = 2;
      const round = 1;
      const { home, away, awayGoals, homeGoals, played } = this.matchForm.getRawValue();
      const match = { 
        homeId: home.id, 
        awayId: away.id, 
        awayGoals: Number(awayGoals), 
        homeGoals: Number(homeGoals),
        tournamentId,
        seasonId,
        round,
        played: Number(played)
      };

      this.matchService.updateMatch(match).pipe(
        catchError((resp) => {
          this.dialog.open(DialogComponent, {
            data: { title: 'Ha ocurrido un error', message: resp.error.message }
          });
          return [];
        })
      ).subscribe((resp: ApiResponse) => {
        this.dialog.open(DialogComponent, {
          data: { title: 'Actualización exitosa', message: resp.message }
        });
      });
    } else {
      this.dialog.open(DialogComponent, {
        data: { message: 'Hay validaciones pendientes.' }
      });
    }
  }

  displayTeam(team: GetTeamsQuery): string {
    return team ? team.name : '';
  }

  private _filterTeams(value: any): any[] {
    if (typeof value === 'string') {
      const filterValue = value.toLowerCase();
      return this.teams.filter(team => team.name.toLowerCase().includes(filterValue));
    }
    return [];
  }

}
