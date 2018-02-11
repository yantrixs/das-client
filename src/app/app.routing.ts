import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShipComponent } from './ship/ship.component';
import { ShipwreckComponent } from './shipwreck/shipwreck.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'shipwrecks',
        component: ShipComponent
    },
    {
        path: 'newShipwreck',
        component: ShipwreckComponent
    },
    {
        path: 'updateShipwreck/:id',
        component: ShipwreckComponent
    }
]
