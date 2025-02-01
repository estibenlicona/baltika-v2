import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'

@Component({
  selector: 'app-myclub',
  imports: [
    MatSidenavModule
  ],
  templateUrl: './myclub.component.html',
  styleUrl: './myclub.component.css'
})
export class MyclubComponent {
  showFiller = false;
}
