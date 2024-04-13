import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


const apiUrl = 'https://localhost:7264/api/v1/guarenteeplataform';
@Injectable({ providedIn: 'root' })
export class serviceHttpGuarentee{
    /**
  * Constructor
  * @param {HttpClient} _httpClient
  */
   
  
   constructor(private _httpClient: HttpClient) { }
  private _buildHttpHeaders(): HttpHeaders {

    return new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
  }

  /**
  * Get Service Json Services
  * @param content
  * @returns {Promise<any>}
  */
  get<T>(url: string): Observable<T> {
    return this._httpClient.get<{ data: T }>(`${apiUrl}/${url}`, { headers: this._buildHttpHeaders(),}).pipe(map((r) => r.data));
  }

  /**
   * Post Service Json Services
   * @param content
   * @returns {Promise<any>}
   */
  post<T>(url: string, content: T): Observable<T> {
    return this._httpClient.post<{ data: T }>(
      `${apiUrl}/${url}`,
      content,
      { headers: this._buildHttpHeaders() }
    ).pipe(map((r) => r.data));
  }

  /**
  * put Service Json Services
  * @param content
  * @returns {Promise<any>}
  */
  put<T>(url: string, content: T): Observable<T> {
    return this._httpClient.put<{ data: T }>(
      `${apiUrl}/${url}`,
      content,
      { headers: this._buildHttpHeaders() }
    ).pipe(map((r) => r.data));
  }

  /**
  * delete Service Json Services
  * @param content
  * @returns {Promise<any>}
  */
  delete<T>(url: string): Observable<any> {
    return this._httpClient.delete<{ data: T }>(
      `${apiUrl}/${url}`,
      { headers: this._buildHttpHeaders() }
    );
  }

}