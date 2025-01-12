import { Component, OnInit } from '@angular/core';
import { PositionsService } from '../../shared/services/positions.service';
import { PositionsQuery } from '../../shared/interfaces/queries/position.query';
import { RouterModule } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-positions',
  imports: [RouterModule, NgFor, NgClass],
  templateUrl: './positions.component.html',
  styleUrl: './positions.component.css'
})
export class PositionsComponent implements OnInit {

  positions: Array<PositionsQuery> = [];

  constructor(private positionsService: PositionsService) {
  }

  ngOnInit(): void {
    this.getPositions();
  }

  getPositions(){
    this.positionsService.getPositions().subscribe((positions: Array<PositionsQuery>) => {
      this.positions = positions;
    })
  }

  isClasified(position: number): boolean {
    position++;
    return position <= 8 ? true : false;
  }

  isLastClasified(position: number): boolean {
    position++;
    return position >= 20 ? true : false;
  }
}
