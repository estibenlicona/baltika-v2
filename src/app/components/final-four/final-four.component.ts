import { Component } from '@angular/core';

@Component({
  selector: 'app-final-four',
  imports: [],
  templateUrl: './final-four.component.html',
  styleUrl: './final-four.component.css'
})
export class FinalFourComponent {
  matches = [
    {
      home: {
        name: 'Nilson Ramirez',
        image: '/images/profiles/nilson-ramirez-lopez.jpg',
        score: 0
      },
      away: {
        name: 'Jaime Teheran',
        image: '/images/profiles/jaime-teheran.jpg',
        score: 2
      }
    },
    {
      home: {
        name: 'Estiben Licona',
        image: '/images/profiles/estiben-licona.jpg',
        score: 2
      },
      away: {
        name: 'Jesus Martinez',
        image: '/images/profiles/jesus-martinez.jpg',
        score: 3
      }
    },
    {
      home: {
        name: 'Ahimelec Manrique',
        image: '/images/profiles/Ahimelec-Manrique.jpg',
        score: 0
      },
      away: {
        name: 'Robert Rodríguez',
        image: '/images/profiles/Robert-Rodríguez.jpg',
        score: 0
      }
    },
    {
      home: {
        name: 'Samu García',
        image: '/images/profiles/Samu-García.jpg',
        score: 1
      },
      away: {
        name: 'Kevin Santiago',
        image: '/images/profiles/Kevin-Santiago.jpg',
        score: 6
      }
    }
  ];
}
