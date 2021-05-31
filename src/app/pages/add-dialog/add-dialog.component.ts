import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl(this.data?.name, Validators.required),
    alias: new FormControl(this.data?.alias, Validators.required),
    active: new FormControl(this.data?.active)
  });

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, public dialogRef: MatDialogRef<AddDialogComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
