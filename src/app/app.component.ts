import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[MenuComponent]
})
export class AppComponent {
  title = 'baltika';

  matches = [
    {
      home: {
        name: 'Nilson Ramirez',
        image: '/images/profiles/nilson-ramirez-lopez.jpg',
        score: 1
      },
      away: {
        name: 'Andres Espitia',
        image: '/images/profiles/andres-espitia.jpg',
        score: 0
      }
    },
    {
      home: {
        name: 'Estiben Licona',
        image: '/images/profiles/estiben-licona.jpg',
        score: 6
      },
      away: {
        name: 'Jesus D Martinez',
        image: '/images/profiles/Jesus-D-Martinez.jpg',
        score: 5
      }
    },
    {
      home: {
        name: 'Adolfo Portela',
        image: '/images/profiles/adolfo-portela.jpg',
        score: 3
      },
      away: {
        name: 'Jesus Martinez',
        image: '/images/profiles/jesus-martinez.jpg',
        score: 7
      }
    },
    {
      home: {
        name: 'Neider D Hernandez',
        image: '/images/profiles/Neider-D-Hernandez.jpg',
        score: 1
      },
      away: {
        name: 'Robert Rodríguez',
        image: '/images/profiles/Robert-Rodríguez.jpg',
        score: 7
      }
    },
    {
      home: {
        name: 'Ahimelec Manrique',
        image: '/images/profiles/Ahimelec-Manrique.jpg',
        score: 3
      },
      away: {
        name: 'Juan P Contreras',
        image: '/images/profiles/Juan-P-Contreras.jpg',
        score: 1
      }
    },
    {
      home: {
        name: 'Samu García',
        image: '/images/profiles/Samu-García.jpg',
        score: 0
      },
      away: {
        name: 'Alvaro De La Rosa',
        image: '/images/profiles/alvaro.jpg',
        score: 0
      }
    },
    {
      home: {
        name: 'Kevin Santiago',
        image: '/images/profiles/Kevin-Santiago.jpg',
        score: 4
      },
      away: {
        name: 'Santiago Alfonzo',
        image: '/images/profiles/Santiago-Alfonso.jpg',
        score: 3
      }
    },
    {
      home: {
        name: 'Jaime Teheran',
        image: '/images/profiles/jaime-teheran.jpg',
        score: 3
      },
      away: {
        name: 'Matteo P Rua',
        image: '/images/profiles/matteo.jpg',
        score: 0
      }
    }
    
  ];
  
}
