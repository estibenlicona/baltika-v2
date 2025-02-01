import { Component, inject, OnInit } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MenuComponent, LoaderComponent, RouterOutlet, MatSidenavModule, MatButtonModule]
})
export class AppComponent implements OnInit {

  oidcSecurityService: OidcSecurityService = inject(OidcSecurityService);

  ngOnInit(): void {
    this.oidcSecurityService.getPayloadFromAccessToken().subscribe(resp => {
      debugger
      console.log(resp);
    });
  }
}
