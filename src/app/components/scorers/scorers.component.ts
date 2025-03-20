import { Component, inject, OnInit, signal } from '@angular/core';
import { ScorersService } from '../../shared/services/scorers.service';
import { ScorersQuery } from '../../shared/interfaces/queries/scorers.query';

@Component({
  selector: 'app-scorers',
  imports: [],
  templateUrl: './scorers.component.html',
  styleUrl: './scorers.component.css'
})
export class ScorersComponent implements OnInit {
  
  scorersSerivce = inject(ScorersService);
  scorers = signal<ScorersQuery[]>([]);
  
  ngOnInit(): void {
    this.getScorers();
  }

  getScorers() {
    this.scorersSerivce.getScorers().subscribe((scorers) => {
      this.scorers.set(scorers);
    });
  }

}
