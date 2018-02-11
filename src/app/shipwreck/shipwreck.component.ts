import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Shipwreck } from '../model/ship.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DasService } from '../service/das.service';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-shipwreck',
  templateUrl: './shipwreck.component.html',
  styleUrls: ['./shipwreck.component.css']
})
export class ShipwreckComponent implements OnInit {
  public shipform: FormGroup;
  public conditions = [Shipwreck.Bad, Shipwreck.Fair, Shipwreck.Good];
  public buttonLable;
  private shipId;
  constructor(private fb: FormBuilder, route: ActivatedRoute,
    private ds: DasService, private router: Router,
    private ss: CommonService) {
    this.shipId = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.buttonLable = this.shipId ? 'Update' : 'Save';
    // console.log(this.buttonLable, ' this.shipId ', this.shipId)
    this.shipform = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      condition: new FormControl('', [Validators.required, Validators.minLength(3)]),
      yearDiscovered: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[0-9]+$'), Validators.maxLength(4)]),
      depth: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[0-9.]+$')]),
      latitude: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[0-9.]+$')]),
      longitude: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[0-9.]+$')]),
    });
    this.getShipId();
  }

  public addShipwreck(): void {
    if (this.shipform.valid) {
      if (this.shipId) {
        console.log('this.shipform.value   ', this.shipform.value);
        let shipData = this.shipform.value;
        shipData.id = this.shipId;
        this.ds.updateShipwreck(parseInt(this.shipId), shipData).subscribe((data) => {
          this.ss.setData(data);
          this.resetShipwreck();
        }, err => console.log('getting ID error ', err),
          () => {
            this.router.navigate(['/shipwrecks']);
          });
      } else {
        let shipWreck = this.shipform.value;
        this.ds.addShipWreck(shipWreck).subscribe((data) => {
          this.ss.setData(data);
          this.resetShipwreck();
        }, err => console.log('getting ID error ', err),
          () => {
            this.router.navigate(['/shipwrecks']);
          });
      }
    } else {
      console.log(' Form Is NOT Valid::: ', this.shipform.valid)
    }
  }

  public resetShipwreck(): void {
    this.shipform.reset();
    this.shipId = null;
  }

  private getShipId(): void {
    if (this.shipId) {
      let shipDetails: any;
      this.ds.getShipWreckById(this.shipId).subscribe((shipwreck) => {
        shipDetails = shipwreck;
        this.updateForm(shipDetails);
      }, err => console.log('getting ID error ', err));
    }
  }

  private updateForm(ship): void {
    // console.log(' Ship is :  ', ship);
    this.shipform.get('name').setValue(ship.name);
    this.shipform.get('description').setValue(ship.description);
    this.shipform.get('condition').setValue(ship.condition);
    this.shipform.get('yearDiscovered').setValue(ship.yearDiscovered);
    this.shipform.get('depth').setValue(ship.depth);
    this.shipform.get('latitude').setValue(ship.latitude);
    this.shipform.get('longitude').setValue(ship.longitude);
  }
}
