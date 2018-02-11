import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { cacheable } from '../util/cache.util';

@Injectable()
export class DasService {
  private _cache: Observable<any>;
  private _wrecks: Observable<any[]>;
  private url = 'api/v1';
  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    if (this._cache) {
      return this._cache;
    }
    return this._cache = cacheable<any>(this.http.get(`${environment.API_URL}`));
  }

  public getWrecks(): Observable<any> {
    return this.http.get(`${environment.API_URL}shipwrecks`)
  }

  public addShipWreck(shipwreck): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}shipwrecks`, shipwreck);
  }

  public getShipWreckById(id): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}shipwrecks/${id}`);
  }

  public updateShipwreck(id, shipwreck): Observable<any> {
    return this.http.put<any>(`${environment.API_URL}shipwrecks/${id}`, shipwreck);
  }

  public deleteShipwreck(id): Observable<any> {
    return this.http.delete<any>(`${environment.API_URL}shipwrecks/${id}`)
  }
}
