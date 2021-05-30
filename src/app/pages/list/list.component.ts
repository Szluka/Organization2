import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'alias', 'active'];
  dataSource: any[] = [];

  constructor(private afs: FirebaseService) {
  }

  ngOnInit(): void {
    this.afs.get("Organization").subscribe(x => this.dataSource = x);
  }

}
