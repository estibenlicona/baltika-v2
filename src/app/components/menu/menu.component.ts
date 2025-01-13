import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  
  oidcSecurityService = inject(OidcSecurityService);

  isAuthenticated: boolean = false;
  isMenuOpen: boolean = false;
  
  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe((resp) => {      
      this.isAuthenticated = resp.isAuthenticated;
    });
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }

  logout(): void {
    this.oidcSecurityService.logoff().subscribe(() => {
      window.sessionStorage.clear();
      window.location.href = '/'
    })
  
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
