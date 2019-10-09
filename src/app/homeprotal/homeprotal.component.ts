import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-homeprotal',
  templateUrl: './homeprotal.component.html',
  styleUrls: ['./homeprotal.component.css']
})
export class HomeprotalComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '726px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
