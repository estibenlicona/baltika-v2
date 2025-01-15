import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() title!: string;
  @Input() message!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title?: string, message?: string }) {}
}
