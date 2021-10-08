import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-planta',
  templateUrl: './agregar-planta.component.html',
  styleUrls: ['./agregar-planta.component.css']
})
export class AgregarPlantaComponent implements OnInit{
  plantasForm: FormGroup;
  
  constructor(private router:Router,  @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public dialogRef: MatDialogRef<AgregarPlantaComponent>){
    this.plantasForm= this.fb.group({
      ID_planta: [this.data.ID_planta,Validators.required],
      Nombre: [this.data.Nombre,Validators.required],
      Regar: "No",
      Luz: "No"
    });
  }
  closedialog(){
    this.dialogRef.close(this.plantasForm.value)
  }
  ngOnInit(): void {}
}
