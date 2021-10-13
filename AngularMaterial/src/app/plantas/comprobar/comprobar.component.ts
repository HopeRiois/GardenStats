import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comprobar',
  templateUrl: './comprobar.component.html',
  styleUrls: ['./comprobar.component.css']
})
export class ComprobarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ComprobarComponent>) { }

  ngOnInit(): void {
  }

  closedialog(){
    this.dialogRef.close()
  }
}
