import { Component, OnInit } from '@angular/core';
import { DasService } from '../service/das.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public springData: any;
  constructor(private dasService: DasService) { }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.dasService.getData().subscribe((data) => {
      this.springData = data;
      console.log('data is :: ', data);
    })
  }

}
