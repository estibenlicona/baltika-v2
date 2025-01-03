import { Routes } from '@angular/router';
import { FinalEightComponent } from './components/final-eight/final-eight.component';
import { FinalFourComponent } from './components/final-four/final-four.component';
import { FinalTwoComponent } from './components/final-two/final-two.component';
import { FinalComponent } from './components/final/final.component';

export const routes: Routes = [
    { path: 'final-eight', component: FinalEightComponent  },
    { path: 'final-four', component: FinalFourComponent  },
    { path: 'final-two', component: FinalTwoComponent  },
    { path: 'final', component: FinalComponent  },
    { path: '', redirectTo: 'final-two', pathMatch: 'full' }
];
