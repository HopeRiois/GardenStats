import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-crecimiento',
  templateUrl: './agregar-crecimiento.component.html',
  styleUrls: ['./agregar-crecimiento.component.css']
})
export class AgregarCrecimientoComponent{

  crecimientoForm: FormGroup;
  constructor(private router:Router,  @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public dialogRef: MatDialogRef<AgregarCrecimientoComponent>){
    this.crecimientoForm= this.fb.group({
      ID_crecimiento: 11,
      ID_planta: [this.data.ID_planta,Validators.required],
      Nombre: "Pepino",
      Registro: [this.data.Registro,Validators.required],
      Fecha: [this.data.Fecha,Validators.required]
    });
  }
  
  closedialog(){
    this.dialogRef.close(this.crecimientoForm.value)
  }

  ngOnInit(): void {};
}
