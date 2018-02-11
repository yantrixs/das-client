import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DasService } from '../service/das.service';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit, OnDestroy {
  public shipwrecks = [];
  private subscription$: Subscription;
  private shipWrecks$: Subscription;
  constructor(private ds: DasService, private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.getShipWrecks();
    this.subscription$ = this.commonService.getData().subscribe((updateData) => {
      console.log('updateData ::::  ', updateData);
      this.shipwrecks = updateData;
    })
  }

  private getShipWrecks(): void {
    this.shipWrecks$ = this.ds.getWrecks().subscribe(data => {
      this.shipwrecks = data;
    });
  }

  public ngOnDestroy(): void {
    if (this.shipWrecks$) {
      this.shipWrecks$.unsubscribe();
    }
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  public viewShipwreck(shipwreck): void {
    // console.log(' Id is :: ', shipwreck);
    this.router.navigate(['/updateShipwreck', shipwreck.id])
  }

  public deleteShipwreck(id): void {
    // console.log(' ship is :: ', id);
    this.ds.deleteShipwreck(id).subscribe((data) => {
      // this.shipwrecks = data;
      for (let i = 0; i < this.shipwrecks.length; i++) {
        if (this.shipwrecks[i].id === data.id) {
          this.shipwrecks.splice(i, 1);
        }
      }
      // console.log(' this.shipwrecks :: ', data);
    })
  }
}
