import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AngularFirestore} from "@angular/fire/firestore";
import {Organization} from "../../shared/models/organization.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public name: string = "";
  public alias: string = "";
  public active: boolean = true;
  private newO: Organization = new Organization();

  constructor(
    private afs: AngularFirestore,
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  addNew(): void {
    this.newO = new Organization(this.name, this.alias,
      this.active);

    this.afs.collection('Organization').add(Object.assign({}, this.newO)).then(() => {
      console.log('Document successfully added!');
    }).catch((error) => {
      console.error('Error adding document: ', error);
    });
    this.dialogRef.close();
  }
}
