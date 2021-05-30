import { Component, OnInit } from '@angular/core';

export interface MenuCard {
  position: number;
  name: string;
  url: string;
}

const MENU: MenuCard[] = [
  {position: 1, name: 'MENU', url: '/home'},
  {position: 2, name: 'ORGANIZATIONS', url: '/list'},
  {position: 3, name: '-', url: '/blank'},
  {position: 4, name: 'ABOUT US', url: '/about'},
];



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menu = MENU;
  image_src: string = '../../../assets/img.png';

  constructor() { }

  ngOnInit(): void {
  }

}
