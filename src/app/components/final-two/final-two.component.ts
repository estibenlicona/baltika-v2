import { Component } from '@angular/core';

@Component({
  selector: 'app-final-two',
  imports: [],
  templateUrl: './final-two.component.html',
  styleUrl: './final-two.component.css'
})
export class FinalTwoComponent {
  matches = [
    {
      home: {
        name: 'Robert Rodríguez',
        image: '/images/profiles/Robert-Rodríguez.jpg',
        score: 0
      },
      away: {
        name: 'Jaime Teheran',
        image: '/images/profiles/jaime-teheran.jpg',
        score: 0
      }
    },
    {
      home: {
        name: 'Jesus Martinez',
        image: '/images/profiles/jesus-martinez.jpg',
        score: 0
      },
      away: {
        name: 'Kevin Santiago',
        image: '/images/profiles/Kevin-Santiago.jpg',
        score: 0
      }
    }
  ];
}
