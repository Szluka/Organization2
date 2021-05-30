import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {MatTableDataSource} from "@angular/material/table";
import {Organization} from "../../shared/models/organization.model";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {AddComponent} from "../add/add.component";
import {EditComponent} from "../edit/edit.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title = 'Person';
  displayedColumns: string[] = ['name', 'alias', 'active'];
  dataSource: MatTableDataSource<Organization> | undefined;

  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {
    this.afs.collection<Organization>('Organization').valueChanges({idField: 'id'}).subscribe(data => {
      // @ts-ignore
      this.dataSource = new MatTableDataSource(data);
      // @ts-ignore
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }


  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    // @ts-ignore
    this.dataSource.filter = filterValue;
  }


  deleteUser(data: { id: string | undefined; }): void {
    this.afs.collection('Organization').doc(data.id).delete().then(() => {
      console.log('Document successfully deleted!');
    }).catch((error) => {
      console.error('Error deleting document: ', error);
    });
  }


  trackByUid(index: any, item: { id: any; }): any {
    return item.id;
  }

  openEditDialog(data: any): void {
    this.dialog.open(EditComponent, {
      width: '350px',
      data
    });
  }

  openAddDialog(): void {
    this.dialog.open(AddComponent, {
      width: '350px'
    });
  }

}
