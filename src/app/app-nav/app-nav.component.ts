import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  public navList = [
    {routePath: '', description: 'Home'},
    {routePath: 'shipwrecks', description: 'Shipwrecks'}
  ];

  public navTitle = 'WWII Shipwrecks';


  constructor() { }

  ngOnInit() {
  }

}
