import { AfterViewInit, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Organization } from 'src/app/shared/models/organization.model';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { DeleteComponent } from '../delete/delete.component';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'alias', 'active', 'actions'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource;

  constructor(private afs: FirebaseService,  public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.afs.get("Organization").subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  openAddDialog(): void {
    this.dialog.open(AddDialogComponent, {
      width: '350px'
    }).afterClosed().subscribe(
      (organization: Organization) => {
        if (organization?.name) {
          this.afs.add("Organization", organization);
        }
      },
      (e) => {
        console.log(e);
      }
    );
  }

  openEditDialog(data?: any): void {
    this.dialog.open(AddDialogComponent, {
      width: '350px',
      data: data
    }).afterClosed().subscribe(
      (organization: Organization) => {
        if (data?.id) {
          this.afs.update("Organization", data.id, organization);
        }
      },
      (e) => {
        console.log(e);
      }
    );
  }

  deleteOrganization(data: any): void {
    this.dialog.open(DeleteComponent, {
      width: '350px',
      data: data
    });
  }
}
