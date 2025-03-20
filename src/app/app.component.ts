import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MenuComponent, LoaderComponent, RouterOutlet, MatSidenavModule, MatButtonModule]
})
export class AppComponent{
}
