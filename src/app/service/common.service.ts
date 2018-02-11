import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {
    private subject = new Subject<any>();

    public setData(val: any): void {
        // console.log('value is :: ', val);
        this.subject.next(val);
    }

    getData(): Observable<any> {
        return this.subject.asObservable();
    }
}