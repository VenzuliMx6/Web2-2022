import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pr1';

  constructor(private MatDialog: MatDialog) {

  }
  onOpenDialogClick() {
    this.MatDialog.open();
  }
}
