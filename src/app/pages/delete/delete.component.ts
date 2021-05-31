import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private afs: FirebaseService, @Inject(MAT_DIALOG_DATA) private data: any, public dialogRef: MatDialogRef<DeleteComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete():void {
    this.afs.delete("Organization", this.data.id);
    this.dialogRef.close();
  }
}
