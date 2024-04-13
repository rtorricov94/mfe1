import { Injectable, inject } from '@angular/core';
import { serviceHttpGuarentee } from '../../common/service-http/service-http-guarantee';
import { applicatDataDto, gbodi } from './guarentee.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuarenteeService {
  private _httpGuarentee = inject(serviceHttpGuarentee);
  /**Request Guarentee Plataform */
  getApplicantData(param: any): Observable<applicatDataDto[]> {
    return this._httpGuarentee.post(`getapplicantdata`, param);
  }
  getTypeExtencion(): Observable<gbodi[]> {
    return this._httpGuarentee.get(`gettypeextencion`);
  }
}
