import { Routes } from '@angular/router';
import { PositionsComponent } from './components/positions/positions.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { authGuard } from './auth/auth.guard';
import { MyclubComponent } from './components/myclub/myclub.component';

export const routes: Routes = [
    { path: 'myclub', component: MyclubComponent, canActivate: [authGuard] },
    { path: 'positions', component: PositionsComponent  },
    { path: 'fixture', component: FixtureComponent  },
    { path: '', redirectTo: 'positions', pathMatch: 'full' }
];
