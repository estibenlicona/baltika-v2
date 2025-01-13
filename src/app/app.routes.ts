import { Routes } from '@angular/router';
import { PositionsComponent } from './components/positions/positions.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { AdminComponent } from './components/admin/admin.component';
import { authAdminGuard, authGuard } from './auth/auth.guard';
import { MyclubComponent } from './components/myclub/myclub.component';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [authAdminGuard] },
    { path: 'myclub', component: MyclubComponent, canActivate: [authGuard] },
    { path: 'positions', component: PositionsComponent  },
    { path: 'fixture', component: FixtureComponent  },
    { path: '', redirectTo: 'positions', pathMatch: 'full' }
];
