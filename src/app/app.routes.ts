import { Routes } from '@angular/router';
import { PositionsComponent } from './components/positions/positions.component';
import { FixtureComponent } from './components/fixture/fixture.component';

export const routes: Routes = [
    { path: 'positions', component: PositionsComponent  },
    { path: 'fixture', component: FixtureComponent  },
    { path: '', redirectTo: 'positions', pathMatch: 'full' }
];
